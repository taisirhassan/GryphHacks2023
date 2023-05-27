import { useState } from 'react'
import './Home.css'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'

function Home() {

  return (
    <>
  <Navbar />
  <header className="pt-1" id='home'>
    <div className="container-md pt-4 pt-xl-5">
      <div className="row pt-5 d-flex justify-content-start align-items-center" style={{paddingTop: 20}}>
        <div className="col-md-6 text-md-start">
          <div className="">
            <h1 className="display-4 fw-bold mb-5">The AI-powered PDF and Video
&nbsp;<span className="underline">Summarizer</span>.</h1>
            <p className="fs-5 text-muted mb-5">Save Time, Get Informed: Instant PDF and Video Summaries at Your Fingertips.</p>
            <form className="d-flex justify-content-start align-items-center flex-wrap" method="post">
              <div className="shadow-lg mb-3"><input className="form-control" type="email" name="email" placeholder="Your Email" /></div>
              <div className="shadow-lg mb-3"><button className="btn btn-primary" type="submit">Subscribe </button></div>
            </form>
          </div>
        </div>
        <div className="col-12 col-lg-6 mx-auto">
          <div className="text-center position-relative">
          <img className="img-fluid" src="./src/assets/img/hero.webp" style={{width: 800}} />
          </div>
        </div>
      </div>
    </div>
  </header>
  {}
  <section className=' ' style={{marginTop:'80px'}} id='pdf'>
    <div className="container-md p-5 py-xl-5">
      <div className="row">
        <div className="col-md-6">
          <h3 className="display-6 fw-bold pb-md-4">Effortlessly Summarize PDFs for
&nbsp;<span className="underline">Quick Insights</span>.</h3>
        </div>
        <div className="col-md-6 pt-4">
          <p className="text-muted mb-4">Our PDF Summarizer tool allows you to extract the most important information from lengthy PDF documents, saving you valuable time and effort. </p>
        </div>
      </div>
      <div className="row gy-4 gy-md-0">
        <div className="col-md-6 d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
          <div>
            <div className="row gy-2 row-cols-1 row-cols-sm-1">
              <div className="col text-center text-md-start">
                <div className="d-flex justify-content-center align-items-center justify-content-md-start"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-warning">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={12} cy={12} r={4} />
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                  </svg>
                  <h5 className="fw-bold mb-0 ms-2">Suggests background reading</h5>
                </div>
                <p className="text-muted my-3">Efficiently skim through lengthy PDF documents.</p>
              </div>
              <div className="col text-center text-md-start">
                <div className="d-flex justify-content-center align-items-center justify-content-md-start"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-warning">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={12} cy={12} r={4} />
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                  </svg>
                  <h5 className="fw-bold mb-0 ms-2">Highlights important points</h5>
                </div>
                <p className="text-muted my-3">Identify and extract key ideas, arguments, and concepts.</p>
              </div>
              <div className="col text-center text-md-start">
                <div className="d-flex justify-content-center align-items-center justify-content-md-start"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-warning">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={12} cy={12} r={4} />
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                  </svg>
                  <h5 className="fw-bold mb-0 ms-2">Creates a referenced summary</h5>
                </div>
                <p className="text-muted my-3">Generate summaries that maintain proper references and citations</p>
              </div>
              <div className="col text-center text-md-start">
                <div className="d-flex justify-content-center align-items-center justify-content-md-start"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-warning">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={12} cy={12} r={4} />
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                  </svg>
                  <h5 className="fw-bold mb-0 ms-2">Extracts tables and figures</h5>
                </div>
                <p className="text-muted my-3">Automatically extract tables and figures from PDFs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 order-first order-md-last">
          <div><img className="rounded img-fluid w-100 fit-cover" style={{minHeight: 300}} src="./src/assets/img/illustrations/teamwork.svg" /></div>
        </div>
      </div>
    </div>
  </section>
  <section >
    <div className="container-md py-4 py-xl-5" id='video'>
      <div className="row gy-4 gy-md-0">
        <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
          <div><img className="rounded img-fluid fit-cover" style={{minHeight: 300}} src="./src/assets/img/illustrations/presentation.svg" width={800} /></div>
        </div>
        <div className="col">
          <div style={{maxWidth: 560}}>
            <h3 className="display-6 fw-bold pb-md-4">Unlock Insights from Videos with&nbsp;<span className="underline">Summarization</span></h3>
            <p className="text-muted py-4 py-md-0">Our Video Summarizer tool revolutionizes the way you consume video content. It automatically analyzes videos, identifies key moments, and generates concise summaries that encapsulate the important information.</p>
            <div className="row gy-4 row-cols-2 row-cols-md-2">
              <div className="col">
                <div><span className="fs-2 fw-bold text-primary bg-warning">Background Digestion</span>
                  <p className="fw-normal text-muted">Condense video content into concise summaries</p>
                </div>
              </div>
              <div className="col">
                <div><span className="fs-2 fw-bold text-primary bg-warning">Highlighting Key Insights</span>
                  <p className="fw-normal text-muted">Identify and extract essential topics, discussions, and takeaways</p>
                </div>
              </div>
              <div className="col">
                <div><span className="fs-2 fw-bold text-primary bg-warning">Accurate Referenced</span>
                  <p className="fw-normal text-muted">Generate summaries that include proper references to the video</p>
                </div>
              </div>
              <div className="col">
                <div><span className="fs-2 fw-bold text-primary bg-warning">Table and Figure Extraction</span>
                  <p className="fw-normal text-muted">Automatically extract relevant tables and figures from videos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-4 py-xl-5">
    <div className="container-md">
      <div className="bg-primary border rounded border-0 border-primary overflow-hidden">
        <div className="row g-0">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className="text-white p-4 p-md-5">
              <h2 className="fw-bold text-white mb-3">Experience the Power of Summarization</h2>
              <p className="mb-4">Ready to save time and enhance your information consumption? Experience the power of our PDF and video summarizer and transform the way you digest content. Simplify complex texts, extract key points, and gain valuable insights in minutes.</p>
              <div className="my-3"><a className="btn btn-warning me-2 mt-2" role="button" href="#">Get Started Now</a></div>
            </div>
          </div>
          <div className="col-md-6 order-first order-md-last" style={{minHeight: 250}}><img className="w-100 h-100 fit-contain pt-5 pt-md-0" src="./src/assets/img/illustrations/web-development.svg" /></div>
        </div>
      </div>
    </div>
  </section>
  {}
  <section className="py-4 py-xl-5 mb-5" id='faqs'>
    <div className="container-md">
      <div className="row mb-2">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2 className="display-6 fw-bold mb-5"><span className="pb-3 underline">FAQ<br /></span></h2>
          <p className="text-muted mb-5">We aim to address your concerns and provide you with the necessary knowledge to make the most of our summarization services.</p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-8 mx-auto">
          <div className="accordion text-muted" role="tablist" id="accordion-1">
            <div className="accordion-item">
              <h2 className="accordion-header" role="tab"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="true" aria-controls="accordion-1 .item-1">How accurate are the summaries generated by your PDF and video summarizer?</button></h2>
              <div className="accordion-collapse collapse show item-1" role="tabpanel" data-bs-parent="#accordion-1">
                <div className="accordion-body">
                  <p>Our summarizer utilizes advanced algorithms that strive to provide accurate summaries. However, it's important to note that the accuracy may vary depending on the complexity of the content and the quality of the source material. We continuously refine and improve our algorithms to enhance the accuracy of the generated summaries.</p>
                  <p className="mb-0">Commodo rutrum quisque curabitur habitasse, suspendisse etiam.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2">Can I customize the level of detail in the generated summaries?</button></h2>
              <div className="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                <div className="accordion-body">
                  <p className="mb-0">Currently, our PDF and video summarizer provides automated summarization based on predefined algorithms. However, we are actively working on introducing customization options to allow users to adjust the level of detail and focus of the generated summaries. Stay tuned for updates on our platform!</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false" aria-controls="accordion-1 .item-3">What file formats are supported for PDF and video summarization?</button></h2>
              <div className="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-1">
                <div className="accordion-body">
                  <p className="mb-0">Our PDF summarizer supports common file formats such as PDF (.pdf). For video summarization, we support popular video formats like MP4, AVI, and MOV. If you have any specific format concerns, please reach out to our support team, and we'll be happy to assist you with any compatibility issues.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-4 py-xl-5" id='contact'>
    <div className="container-md">
      <div className="text-white bg-primary border rounded border-0 border-primary d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
        <div className="pb-2 pb-lg-1">
          <h2 className="fw-bold text-warning mb-2">Get in Touch: Reach Out to Our Team</h2>
          <p className="mb-0">Reach Out to Us for Expert Support and Personalized Assistance—We're Committed to Providing Exceptional Service.</p>
        </div>
        <div className="my-2"><a className="btn btn-light fs-5 py-2 px-4" role="button" href="contacts.html">Contact us</a></div>
      </div>
    </div>
  </section>
  <Footer/>
  
    </>
  )
}

export default Home
