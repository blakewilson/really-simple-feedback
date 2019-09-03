const createElement = () => {
    const el = document.createElement('div')
    el.id = 'feedback-widget'
    el.setAttribute('data-isclosed', true)

    el.innerHTML = `
        <header id="feedback-header">
            <div>Feedback</div>
            <svg class="feedback-close" style="display: none;" width="16" height="16" viewBox="0 0 14 14"><path style="fill: #fff;" d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"></path></svg>
        </header>
        <form id="feedback">
            <div class="feedback-field-group feedback-field-group-comment">
                <label for="feedback-comment" class="feedback-label">Feedback about this page?</label>
                <textarea id="feedback-comment" class="feedback-input"></textarea>
            </div>

            <p class="feedback-form-presubmit-message">The current URL will be sent as well.</p>

            <button class="feedback-submit-button">Submit</button>
        </form>
        <footer id="feedback-footer">
            <div>Powered by <a href="#">Really Simple Feedback</a></div>
        </footer>
    `

    document.body.appendChild(el)

    const elHeight = el.offsetHeight
    const elHeaderHeight = el.querySelector('header').offsetHeight

    el.style.bottom  = `-${elHeight}px`
    el.style.visibility = 'visible'
    el.style.transition = 'bottom .5s ease-in-out'

    setTimeout(() => {
        el.style.bottom = `-${elHeight - elHeaderHeight}px`
    }, 1000)
}
createElement()

document.addEventListener('submit', e => {
    if (e.target.id != 'feedback') {
        return null
    }

    e.preventDefault()

    const comment = document.getElementById('feedback-comment')

    if(!comment.value) {
        document.querySelector('.feedback-field-group-comment').classList.add('feedback-field-group-error')
        return
    }

    const data = {
        comment: comment.value,
        userAgent: navigator.userAgent
    }

    fetch('http://feedback.testing:9999/wp-json/really-simple-feedback/v1/feedback', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => {
            const form = document.querySelector('#feedback-widget form')
            form.innerHTML = '<h2>Thank You</h2><p>Thanks for submitting your feedback!</p>'
        })
        .catch(err => console.log(err))
})

document.addEventListener('click', e => {
    if( e.target.id !== 'feedback-header' ) {
        return null
    }

    const el = document.getElementById('feedback-widget')

    if(el.getAttribute('data-isclosed')) {
        el.removeAttribute('data-isclosed')
    } else {
        el.setAttribute('data-isclosed', true)
    }


    if (!el.getAttribute('data-isclosed')) {
        el.style.transition = 'bottom 0.2s ease-in-out'
        el.style.bottom = '1rem'
        
        el.querySelector('.feedback-close').style.display = 'block'
    } else {
        el.querySelector('.feedback-close').style.display = 'none'

        const elHeight = el.offsetHeight
        const elHeaderHeight = el.querySelector('header').offsetHeight

        el.style.bottom = `-${elHeight - elHeaderHeight}px`
    }
})