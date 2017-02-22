import Link from 'next/link'
import RaisedButton from 'material-ui/RaisedButton'

export default () => (
  <div>
    <div className='banner'>
      <div className='header-main'>
        <h1>
          Task Management in the Most Simplistic Form, <br />
          Welcome to <i>Plate</i>!
        </h1>
      </div>
      <div className='header-secondary'>
        <h5>
          Create multiple plates and customize your very own task layout.<br /> Register now
          to begin managing your tasks!
        </h5>
      </div>
      <div className='register-button'>
        <Link href='/register'>
          <RaisedButton label='Register Now' primary />
        </Link>
      </div>
    </div>
    <style jsx>{`
      .banner {
        background-image: url('/static/img/plateGradient.png');
        height: 500px;
        padding-top: 80px;
      }
      .header-main h1 {
        text-align: center;
        color: white;
        font-size: 3.5em;
      }
      .header-secondary h5{
        text-align: center;
        color: white;
        font-style: italic;
        margin-top: 30px;
      }
      .register-button {
        margin-top: 50px;
        display: flex;
        justify-content: center;
      }
      @media only screen and (max-width: 660px) {
        .banner {
          padding-top: 80px;
          padding-right: 40px;
          padding-left: 40px;
          height: 400px;
        }
         .header-main h1 {
           font-size: 1.5em;
         }
         .header-secondary h5 {
           font-size: 1.0em;
         }
      }
    `}</style>
  </div>
)
