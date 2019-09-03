import 'whatwg-fetch'

const ReallySimpleFeedbackAdmin = () => {
  document.addEventListener('click', e => {
    if (!e.target.classList.contains('rsf-js-mark-as-read')) {
      return null
    }

    const row = e.target.closest('.rsf-post')
    const postID = e.target.getAttribute('data-postid')

    window.fetch(
      `${rsf_localized.site_url}/wp-json/really-simple-feedback/v1/mark_as_read/${postID}`,
      {
        method: 'POST',
        headers: {
          'X-WP-Nonce': rsf_localized.nonce,
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(res => {
        row.classList.remove('rsf-post-unread')

        e.target.classList.remove('rsf-js-mark-as-read')
        e.target.classList.add('rsf-js-mark-as-unread')
        e.target.textContent = rsf_localized.mark_as_unread_text
      })
      .catch(err => console.log(err))
  })

  document.addEventListener('click', e => {
    if (!e.target.classList.contains('rsf-js-mark-as-unread')) {
      return null
    }

    const row = e.target.closest('.rsf-post')
    const postID = e.target.getAttribute('data-postid')

    window.fetch(
      `${rsf_localized.site_url}/wp-json/really-simple-feedback/v1/mark_as_unread/${postID}`,
      {
        method: 'POST',
        headers: {
          'X-WP-Nonce': rsf_localized.nonce,
          'Content-Type': 'applications/json',
        },
      }
    )
      .then(res => res.json())
      .then(res => {
        row.classList.add('rsf-post-unread')

        e.target.classList.remove('rsf-js-mark-as-unread')
        e.target.classList.add('rsf-js-mark-as-read')
        e.target.textContent = rsf_localized.mark_as_read_text
      })
      .catch(err => console.log(err))
  })

  document.addEventListener('click', e => {
    if (!e.target.classList.contains('column-user_agent')) {
      return null
    }

    if (e.target.classList.contains('rsf-expanded-column')) {
      e.target.classList.remove('rsf-expanded-column')
    } else {
      e.target.classList.add('rsf-expanded-column')
    }
  })

  document.addEventListener('click', e => {
    if (!e.target.classList.contains('column-url')) {
      return null
    }

    if (e.target.classList.contains('rsf-expanded-column')) {
      e.target.classList.remove('rsf-expanded-column')
    } else {
      e.target.classList.add('rsf-expanded-column')
    }
  })
}
ReallySimpleFeedbackAdmin()
