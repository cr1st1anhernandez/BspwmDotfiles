export function RegistrationCard() {
  return (
    <>
      <div className="registrationCard-container">
        <h2 className="registrationCard-title">Create Account</h2>
        <p className="registrationCard-subtitle">Please fill the input blow here</p>
        <form className="registrationCard-form">
          <div className="registrationCard-input">
            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" /><path d="m14.5 13.5c-.6615287-2.2735217-3.1995581-3.0251263-6-3.0251263-2.72749327 0-5.27073171.8688092-6 3.0251263" /><path d="m8.5 2.5c1.6568542 0 3 1.34314575 3 3v2c0 1.65685425-1.3431458 3-3 3-1.65685425 0-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3z" /></g></svg>
            <input type="text" placeholder="FULL NAME" />
          </div>
          <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(5 3)"><path d="m2.5.5h6c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-6c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z" /><path d="m3.5 12.5h4" /></g></svg>
          <input className="registrationCard-input" type="text" placeholder="PHONE" />
          <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4.5 2.5)"><path d="m12 10.03c0 2.7448552-1.2554932 5.97-6 5.97-.75780542 0-1.42660143-.0822778-2.01548904-.2317346m-1.76100565-.7815476c-1.68909404-1.1706539-2.22350531-3.1659055-2.22350531-4.9567178v-4.03c0-1.56622031.65466451-2.97953554 1.70527792-3.98123005m1.67130335-1.35397567c.77973587-.42395337 1.6734516-.66479428 2.62341873-.66479428 1.75280799 0 3.49283909.72275393 4.5 2m1.2058722 1.22085393c.1906672.55804827.2941278 1.15651492.2941278 1.77914607 0-.66666667 0 .33333333 0 3" /><path d="m6 14c-1.33333333-.6666667-2-1.6566667-2-2.97v-5.03c0-1.1045695.8954305-2 2-2s2 .8954305 2 2v4.03c0 .6666667.33333333 1 1 1s1-.3333333 1-1v-4.46441832c0-.45607794-.10398763-.90615253-.30405487-1.31600639-.73207609-1.49971686-1.9640578-2.24957529-3.69594513-2.24957529-1.73187932 0-2.96385765.7498515-3.69593498 2.2495545-.20007634.40985541-.30406502.85993519-.30406502 1.31601852v5.43442698c0 1 .16666667 1.6666667.5 2" /><path d="m6 6v4.03c0 1.98 1 2.97 3 2.97" /></g></svg>
          <input className="registrationCard-input" type="password" placeholder="PASSWORD" />
          <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4.5 2.5)"><path d="m12 10.03c0 2.7448552-1.2554932 5.97-6 5.97-.75780542 0-1.42660143-.0822778-2.01548904-.2317346m-1.76100565-.7815476c-1.68909404-1.1706539-2.22350531-3.1659055-2.22350531-4.9567178v-4.03c0-1.56622031.65466451-2.97953554 1.70527792-3.98123005m1.67130335-1.35397567c.77973587-.42395337 1.6734516-.66479428 2.62341873-.66479428 1.75280799 0 3.49283909.72275393 4.5 2m1.2058722 1.22085393c.1906672.55804827.2941278 1.15651492.2941278 1.77914607 0-.66666667 0 .33333333 0 3" /><path d="m6 14c-1.33333333-.6666667-2-1.6566667-2-2.97v-5.03c0-1.1045695.8954305-2 2-2s2 .8954305 2 2v4.03c0 .6666667.33333333 1 1 1s1-.3333333 1-1v-4.46441832c0-.45607794-.10398763-.90615253-.30405487-1.31600639-.73207609-1.49971686-1.9640578-2.24957529-3.69594513-2.24957529-1.73187932 0-2.96385765.7498515-3.69593498 2.2495545-.20007634.40985541-.30406502.85993519-.30406502 1.31601852v5.43442698c0 1 .16666667 1.6666667.5 2" /><path d="m6 6v4.03c0 1.98 1 2.97 3 2.97" /></g></svg>
          <input className="registrationCard-input" type="password" placeholder="CONFIRM PASSWORD" />
          <button className="registrationCard-button" type="button">SIGN UP</button>
        </form>
        <p className="registrationCard-footer">Already have a account? <a className="registrationCard-link" href="">Sign in</a> </p>
      </div>
    </>
  )
}
