import 'whatwg-fetch'

const ReallySimpleFeedback = () => {
  const feedbackButton = document.createElement('div')
  feedbackButton.id = 'rsf-open-pane'
  feedbackButton.innerHTML = `
    <svg width="121px" height="121px" viewBox="0 0 121 121" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Satisfied">
                <circle id="Face" fill="#FFC239" cx="60.5" cy="60.5" r="60.5"></circle>
                <g id="Eyes" transform="translate(37.000000, 39.000000)" fill="#000000">
                    <circle id="Right-Eye" cx="41" cy="7" r="7"></circle>
                    <circle id="Left-Eye" cx="7" cy="7" r="7"></circle>
                </g>
                <path d="M35,88 C41.017505,84 49.145553,82 59.384144,82 C69.6227351,82 78.4946871,84 86,88" id="Mouth" stroke="#000000" stroke-width="3" stroke-linecap="square" transform="translate(60.500000, 85.000000) rotate(-180.000000) translate(-60.500000, -85.000000) "></path>
            </g>
        </g>
    </svg>
    <span>${rsf_localized.feedback_button_text}</span>
`
  document.body.appendChild(feedbackButton)

  const widget = document.createElement('div')
  widget.id = 'rsf-widget'
  document.body.appendChild(widget)

  const thankYou = document.createElement('div')
  thankYou.classList.add('rsf-thank-you')
  thankYou.innerHTML = `
    <svg width="165px" height="165px" viewBox="0 0 165 165" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Thank-You-icon">
            <circle id="Oval" fill="#AFECAF" cx="82.5" cy="82.5" r="82.5"></circle>
            <polyline id="Line" stroke="#296329" stroke-width="13" stroke-linecap="square" points="43 90.6543138 73.0424861 108 122.536284 58"></polyline>
        </g>
    </g>
    </svg>
    <span>${rsf_localized.thank_you_message}</span>
`
  document.body.appendChild(thankYou)
  thankYou.style.bottom = `-${thankYou.offsetHeight}px`

  const header = document.createElement('header')
  header.classList.add('rsf-header')
  widget.appendChild(header)

  const headerTitle = document.createElement('span')
  headerTitle.classList.add('rsf-widget-title')
  headerTitle.textContent = rsf_localized.widget_header_text
  header.appendChild(headerTitle)

  const headerClose = document.createElement('span')
  headerClose.innerHTML = `
    <svg id="rsf-close" width="16" height="16" viewBox="0 0 14 14"><path style="fill: #fff;" d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"></path></svg>
`
  header.appendChild(headerClose)

  headerClose.addEventListener('click', e => {
    hideWidget()

    setTimeout(() => {
      showFeedbackButton()
    }, 250)
  })

  const generalError = document.createElement('div')
  generalError.classList.add('rsf-error')
  widget.appendChild(generalError)

  const form = document.createElement('form')
  form.id = 'rsf-form'
  form.name = 'rsf-form'
  widget.appendChild(form)

  const satisfactionMessage = document.createElement('p')
  satisfactionMessage.classList.add('rsf-satisfaction-message')
  satisfactionMessage.textContent = rsf_localized.satisfaction_message
  form.appendChild(satisfactionMessage)

  const satisfactionSection = document.createElement('div')
  satisfactionSection.classList.add('rsf-satisfaction')
  form.appendChild(satisfactionSection)

  const unsatisfiedOption = document.createElement('label')
  unsatisfiedOption.classList.add('rsf-unsatisfied-option')
  unsatisfiedOption.style.marginRight = '1rem'
  satisfactionSection.appendChild(unsatisfiedOption)

  const unsatisfiedInput = document.createElement('input')
  unsatisfiedInput.type = 'radio'
  unsatisfiedInput.id = 'rsf-unsatisfied-option'
  unsatisfiedInput.name = 'satisfactionRating'
  unsatisfiedInput.value = 'unsatisfied'
  unsatisfiedOption.appendChild(unsatisfiedInput)

  const unsatisfiedImage = document.createElement('span')
  unsatisfiedImage.classList.add('rsf-svg-holder')
  unsatisfiedImage.innerHTML = `
    <svg width="121px" height="121px" viewBox="0 0 121 121" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Unsatisfied">
                <circle id="Face" fill="#FDABA5" cx="60.5" cy="60.5" r="60.5"></circle>
                <g id="Eyes" transform="translate(37.000000, 39.000000)" fill="#9B332B">
                    <circle id="Right-Eye" cx="41" cy="7" r="7"></circle>
                    <circle id="Left-Eye" cx="7" cy="7" r="7"></circle>
                </g>
                <path d="M35,88 C41.017505,84 49.145553,82 59.384144,82 C69.6227351,82 78.4946871,84 86,88" id="Mouth" stroke="#9B332B" stroke-width="3" stroke-linecap="square"></path>
            </g>
        </g>
    </svg>
`
  unsatisfiedOption.append(unsatisfiedImage)

  const satisfiedOption = document.createElement('label')
  satisfiedOption.classList.add('rsf-satisfied-option')
  satisfactionSection.appendChild(satisfiedOption)

  const satisfiedInput = document.createElement('input')
  satisfiedInput.type = 'radio'
  satisfiedInput.id = 'rsf-satisfied-option'
  satisfiedInput.name = 'satisfactionRating'
  satisfiedInput.value = 'satisfied'
  satisfiedOption.appendChild(satisfiedInput)

  const satisfiedImage = document.createElement('span')
  satisfiedImage.classList.add('rsf-svg-holder')
  satisfiedImage.innerHTML = `
    <svg width="121px" height="121px" viewBox="0 0 121 121" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Satisfied">
                <circle id="Face" fill="#AFECAF" cx="60.5" cy="60.5" r="60.5"></circle>
                <g id="Eyes" transform="translate(37.000000, 39.000000)" fill="#296329">
                    <circle id="Right-Eye" cx="41" cy="7" r="7"></circle>
                    <circle id="Left-Eye" cx="7" cy="7" r="7"></circle>
                </g>
                <path d="M35,88 C41.017505,84 49.145553,82 59.384144,82 C69.6227351,82 78.4946871,84 86,88" id="Mouth" stroke="#296329" stroke-width="3" stroke-linecap="square" transform="translate(60.500000, 85.000000) rotate(-180.000000) translate(-60.500000, -85.000000) "></path>
            </g>
        </g>
    </svg>
`
  satisfiedOption.appendChild(satisfiedImage)

  const commentSection = document.createElement('div')
  commentSection.classList.add('rsf-comments')
  form.appendChild(commentSection)

  const textarea = document.createElement('textarea')
  textarea.id = 'rsf-comment-input'
  textarea.name = 'rsf-comments'
  commentSection.appendChild(textarea)

  const commentSectionError = document.createElement('div')
  commentSectionError.classList.add('rsf-error')
  commentSection.appendChild(commentSectionError)

  const submitSection = document.createElement('div')
  submitSection.classList.add('rsf-send')
  form.appendChild(submitSection)

  const submit = document.createElement('button')
  submit.classList.add('rsf-submit-button')
  submit.innerHTML = `
<span>${rsf_localized.submit_text}</span>
<svg width="1rem" height="1rem" style="margin-left: 0.5rem" viewBox="0 0 35 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <polygon id="Path" fill="#FFFFFF" fill-rule="nonzero" points="0 35.25 35 17.75 0 0.25 0 13.8611111 25 17.75 0 21.6388889"></polygon>
    </g>
</svg>
`
  submitSection.appendChild(submit)

  feedbackButton.addEventListener('click', e => {
    hideFeedbackButton()

    setTimeout(() => {
      showWidget()
    }, 250)
  })

  document.addEventListener('click', e => {
    if (e.target.name !== 'satisfactionRating') {
      return null
    }

    function testing() {}

    if (e.target.value === 'unsatisfied') {
      textarea.placeholder = rsf_localized.unsatisfied_placeholder_text
    }

    if (e.target.value === 'satisfied') {
      textarea.placeholder = rsf_localized.satisfied_placeholder_text
    }

    showCommentSection()
    showSubmitSection()
  })

  document.addEventListener('input', e => {
    if (e.target.id !== 'rsf-comment-input') {
      return null
    }

    e.target.style.borderColor = '#000'
    commentSectionError.textContent = ''
  })

  document.addEventListener('submit', e => {
    if (e.target.id !== 'rsf-form') {
      return null
    }

    e.preventDefault()

    // Clear prior errors
    generalError.textContent = ''
    commentSectionError.textContent = ''

    const comment = document.getElementById('rsf-comment-input')

    let rating
    if (unsatisfiedInput.checked) {
      rating = 'unsatisfied'
    }

    if (satisfiedInput.checked) {
      rating = 'satisfied'
    }

    const data = {
      rating: rating,
      comment: comment.value,
      userAgent: navigator.userAgent,
    }

    window.fetch(
      `${rsf_localized.site_url}/wp-json/really-simple-feedback/v1/feedback`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(res => {
        if (res.code) {
          switch (res.code) {
            case 'no_comment':
              textarea.style.borderColor = '#F44336'
              commentSectionError.textContent =
                rsf_localized.comment_section_error_message
              break
            default:
              generalError.textContent = rsf_localized.general_error_message
          }
          return
        }
        hideWidget()

        setTimeout(() => {
          showThankYou()
          resetWidget()

          setTimeout(() => {
            hideThankYou()

            setTimeout(() => {
              showFeedbackButton()
            }, 250)
          }, 2500)
        }, 250)
      })
      .catch(err => {
        console.log(err)
        generalError.textContent = rsf_localized.general_error_message
      })
  })

  function showWidget() {
    widget.style.visibility = 'visible'
    widget.style.transition = 'bottom 0.25s ease-in-out'
    widget.style.bottom = '1rem'
  }

  function hideWidget() {
    widget.style.transition = 'bottom 0.25s ease-in-out'
    widget.style.bottom = `-${widget.offsetHeight}px`

    setTimeout(() => {
      widget.style.visibility = 'hidden'
    }, 250)
  }

  function showThankYou() {
    thankYou.style.visibility = 'visible'
    thankYou.style.transition = 'bottom 0.25s ease-in-out'
    thankYou.style.bottom = '1rem'
  }

  function hideThankYou() {
    thankYou.style.transition = 'bottom 0.25s ease-in-out'
    thankYou.style.bottom = `-${thankYou.offsetHeight}px`

    setTimeout(() => {
      thankYou.style.visibility = 'hidden'
    }, 250)
  }

  function showFeedbackButton() {
    feedbackButton.style.visibility = 'visible'
    feedbackButton.style.transition = 'bottom 0.25s ease-in-out'
    feedbackButton.style.bottom = '1rem'
  }

  function hideFeedbackButton() {
    feedbackButton.style.transition = 'bottom 0.25s ease-in-out'
    feedbackButton.style.bottom = `-${feedbackButton.offsetHeight}px`

    setTimeout(() => {
      feedbackButton.style.visibility = 'hidden'
    }, 250)
  }

  function showCommentSection() {
    widget.style.maxHeight = `${widget.scrollHeight}px`

    commentSection.style.opacity = 0
    commentSection.style.display = 'block'
    commentSection.style.transition = 'opacity 0.25s ease-in-out'

    widget.style.transition = 'max-height 0.25s ease-in-out'
    widget.style.maxHeight = `${widget.scrollHeight}px`

    commentSection.style.opacity = 1

    setTimeout(() => {
      widget.style.maxHeight = 'none'
    }, 250)
  }

  function showSubmitSection() {
    widget.style.maxHeight = `${widget.scrollHeight}px`

    submitSection.style.opacity = 0
    submitSection.style.display = 'block'
    submitSection.style.transition = 'opacity 0.25s ease-in-out'

    widget.style.transition = 'max-height 0.25s ease-in-out'
    widget.style.maxHeight = `${widget.scrollHeight}px`

    submitSection.style.opacity = 1

    setTimeout(() => {
      widget.style.maxHeight = 'none'
    }, 250)
  }

  function resetWidget() {
    commentSection.style.display = 'none'
    submitSection.style.display = 'none'
    commentSection.style.opacity = 0
    submitSection.style.opacity = 0
    unsatisfiedInput.checked = false
    satisfiedInput.checked = false
    widget.style.maxHeight = 'none'
    textarea.value = ''
  }

  widget.style.bottom = `-${widget.offsetHeight}px`
}
ReallySimpleFeedback()
