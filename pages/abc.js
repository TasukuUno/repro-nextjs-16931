function ABCPage() {
  return (
    <div>this is abc page</div>
  )
}

ABCPage.getInitialProps = async(context) => {
  await someAPI()
  return {
    text: 'some error'
  };
}

async function someAPI() {
  throw new Error('error has occured')
}


export default ABCPage
