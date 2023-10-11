import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Laing Solutions Ltd. - Bespoke digital software development and consultancy services."
                    meta={[
                        { name: 'description', content: 'Bespoke digital software development and consultancy services.' },
                        { name: 'keywords', content: 'digital transformation, development, developer, agile, nodejs, ruby, rails' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="clients" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Department for Education</h3>
                                <p>Development of the 'Apply for Teacher Training' service for DfE along with other supporting public services.</p>
                            </header>
                            <Link to="https://www.apply-for-teacher-training.service.gov.uk" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Government Digital Service</h3>
                                <p>Providing development resource to Government Digital Services on the GOV.UK programme.</p>
                                <p>Working with GDS since the beta phase of the award winning GOV.UK website and associated services.</p>
                                <p>This programme revolutionised the digital landscape of government services by placing citizen's needs at the heart of the transformation process.</p>
                            </header>
                            <Link to="https://www.gov.uk" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>BOXT</h3>
                                <p>Full stack development of the BOXT 'Offers' feature.</p>
                            </header>
                            <Link to="https://www.boxt.co.uk" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Airslie - Kings College Hospital</h3>
                                <p>Airslie is a company set up by doctors to produce a clinical information system for renal units.</p>
                                <p>Services included development of features for 'Renalware', a clinical application based on the National Early Warning Score.</p>
                            </header>
                            <Link to="https://www.airslie.com" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="background">
                        <div className="inner">
                            <header className="major">
                                <h2>Background</h2>
                            </header>
                            <p>Laing Solutions started providing software development consultancy services in 2007.</p>
                            <p>Since then we have worked with a number of clients in the public and private sectors.</p>
                            <p>We specialise in agile development using industry leading technologies such as Ruby on Rails and NodeJS.</p>
                            <ul className="actions">
                                <li><Link to="#contact" className="button next">Contact us</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
