type ContactFormProps = {
  labels: Readonly<{
    name: string
    email: string
    organization: string
    message: string
    submit: string
    hint: string
  }>
  mailTo: string
}

export const ContactForm = ({ labels, mailTo }: ContactFormProps) => {
  return (
    <form
      className="contact-form"
      action={`mailto:${mailTo}`}
      method="post"
      encType="text/plain"
    >
      <div className="form-grid">
        <label>
          {labels.name}
          <input type="text" name="name" placeholder={labels.name} required />
        </label>
        <label>
          {labels.email}
          <input type="email" name="email" placeholder={labels.email} required />
        </label>
        <label>
          {labels.organization}
          <input type="text" name="organization" placeholder={labels.organization} />
        </label>
        <label className="full">
          {labels.message}
          <textarea name="message" rows={5} placeholder={labels.message} />
        </label>
      </div>
      <p className="form-hint">{labels.hint}</p>
      <button className="primary-button" type="submit">
        {labels.submit}
      </button>
    </form>
  )
}
