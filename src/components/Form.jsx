import "../styles/Form.css"

const Form = () => {
  return (
    <>
    <div class="form-container">
  <h1>JOIN HYDRA</h1><br />
  <hr className="form-hr" />
  <h2>Let's Build Your VR Experence</h2>
  <form>
    <div class="flex-fields">
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
    </div>
    <div class="flex-fields">
    <input type="email" placeholder="Email" />
    <input type="tel" placeholder="Phone Number" />
    </div>
    <div class="flex-fields">
    <input type="text" placeholder="Subject" />
    </div>

    <div class="flex-fields">
    <textarea placeholder="Tell us something"></textarea>
    </div>
    <div className="button-container">
    <button type="submit">SEND TO HYDRA</button>
    </div>
  </form>
</div>

    </>
  )
}

export default Form