import Error from '../components/error'

function ErrorPage({ text }) {
  return (
    <div>
      <Error text={text} />
      <span>css for this page is not applied only on server rendering (next@9.5.3)</span>
    </div>
  )
}

ErrorPage.getInitialProps = async(context) => {
  return {
    text: context.err.message || 'some error'
  };
}

export default ErrorPage
