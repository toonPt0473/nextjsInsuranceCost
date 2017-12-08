import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <title>Insurance App</title>
            <link href="https://fonts.googleapis.com/css?family=Prompt" rel="stylesheet" />
        </Head>
        <body className="App">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}


