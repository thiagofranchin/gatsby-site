import React from 'react'
import Layout from '../components/Layout'
import SEO from "../components/seo"

const Success = () => {
  const text = 'Mensagem enviada com sucesso!!!'

  return(
    <Layout>
      <SEO
        title="Success"
      />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Success</h1>
            <p className="text-gatsby">{ text }</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Success