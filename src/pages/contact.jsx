import React from 'react'
import Layout from '../components/Layout'
import SEO from "../components/seo"

import * as Styled from '../styles/pages/contactStyles'

const Contact = () => {
  const text = 'Lorem ipsum dolor sit amet consectetur'

  return(
    <Layout>
      <SEO title="contact" />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Contact</h1>
            <p>{ text }</p>
          </div>
          <div className="col-md-6 mb-5">
            <h3>contact</h3>
            <h3>input hidden + action=success</h3>
            <form name="contact" method="post" action="/success/">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <input name="name" type="text" className="form-control" id="exampleInputName" placeholder="Name" />
              </div>
              <div className="form-group">
                <input name="email" type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail" />
              </div>
              <div className="form-group">
                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Textarea"></textarea>
              </div>
              <button type="submit" className="btn btn-gatsby">Send</button>
            </form>
          </div>


          <div className="col-md-6 mb-5">
            <h3>contact2</h3>
            <h3>input hidden</h3>
            <form name="contact2" method="post">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <input name="name" type="text" className="form-control" id="exampleInputName" placeholder="Name" />
              </div>
              <div className="form-group">
                <input name="email" type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail" />
              </div>
              <div className="form-group">
                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Textarea"></textarea>
              </div>
              <button type="submit" className="btn btn-gatsby">Send</button>
            </form>
          </div>

          <div className="col-md-6 mb-5">
            <h3>contact3</h3>
            <h3>Tag data-netlify + input hidden</h3>
            <form name="contact3" method="post" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <input name="name" type="text" className="form-control" id="exampleInputName" placeholder="Name" />
              </div>
              <div className="form-group">
                <input name="email" type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail" />
              </div>
              <div className="form-group">
                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Textarea"></textarea>
              </div>
              <button type="submit" className="btn btn-gatsby">Send</button>
            </form>
          </div>

          <div className="col-md-6 mb-5">
            <h3>contact4/5</h3>
            <h3>Tag data-netlify + success</h3>
            <form name="contact45" method="post" data-netlify="true" action="/success/">
              <div className="form-group">
                <input name="name" type="text" className="form-control" id="exampleInputName" placeholder="Name" />
              </div>
              <div className="form-group">
                <input name="email" type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail" />
              </div>
              <div className="form-group">
                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Textarea"></textarea>
              </div>
              <button type="submit" className="btn btn-gatsby">Send</button>
            </form>
          </div>

          <div className="col-md-6 mb-5">
            <h3>contact4</h3>
            <h3>Tag data-netlify + input hidden + success</h3>
            <form name="contact4" method="post" data-netlify="true" action="/success/">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <input name="name" type="text" className="form-control" id="exampleInputName" placeholder="Name" />
              </div>
              <div className="form-group">
                <input name="email" type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail" />
              </div>
              <div className="form-group">
                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Textarea"></textarea>
              </div>
              <button type="submit" className="btn btn-gatsby">Send</button>
            </form>
          </div>

          <div className="col-md-6 mb-5">
            <h3>contact5</h3>
            <h3>Only input hidden complete</h3>
            <form name="contact5" method="post">
              <input type="hidden" name="contact5" value="contact" />
              <div className="form-group">
                <input name="name" type="text" className="form-control" id="exampleInputName" placeholder="Name" />
              </div>
              <div className="form-group">
                <input name="email" type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail" />
              </div>
              <div className="form-group">
                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Textarea"></textarea>
              </div>
              <button type="submit" className="btn btn-gatsby">Send</button>
            </form>
          </div>

          <div className="col-md-6 mb-5">
            <h3>contact6</h3>
            <h3>input hidden solo</h3>
            <form name="contact6" method="post">
              <input type="hidden" />
              <div className="form-group">
                <input name="name" type="text" className="form-control" id="exampleInputName" placeholder="Name" />
              </div>
              <div className="form-group">
                <input name="email" type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail" />
              </div>
              <div className="form-group">
                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Textarea"></textarea>
              </div>
              <button type="submit" className="btn btn-gatsby">Send</button>
            </form>
          </div>

          <div className="col-md-6 mb-5">
            <h3>contact7</h3>
            <h3>CLEAR</h3>
            <form name="contact7" method="post">
              <div className="form-group">
                <input name="name" type="text" className="form-control" id="exampleInputName" placeholder="Name" />
              </div>
              <div className="form-group">
                <input name="email" type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail" />
              </div>
              <div className="form-group">
                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Textarea"></textarea>
              </div>
              <button type="submit" className="btn btn-gatsby">Send</button>
            </form>
          </div>

          <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item">
              <Styled.EmailWrapper danger
              /> my-email@email.com
            </li>
            <li className="list-group-item">
              <Styled.PhoneWrapper danger
              /> (00) 98765-4321
            </li>
            <li className="list-group-item">
              <Styled.LocationOnWrapper danger
              /> Street 27, 123
            </li>
          </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact