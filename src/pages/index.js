import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"
import Intro from "../components/Intro"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Golden Eagle Chinese Restaurant is located on King Street in Honolulu. We are open daily serving your favorite Chinese Cuisine.`,
      author: `@restaurantmarketinghawaii"
      keywords={[
        `Chinese Restaurant`,
        `Hawaii Restaurant`,
        `Hawaii Chinese Food`,
        `Chinese Takeout`,
      ]}
    />
    <HeaderIndex style={{ padding: "4rem 0rem" }}>
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <Banner
          titleSmall="Golden Eagle Chinese Restaurant"
          subtitle="Golden Eagle Chinese Restaurant is located on King Street in Honolulu. We are open daily serving your favorite Chinese Cuisine."
        >
          <a href="https://www.grindztogo.com/single.php/order/restaurant/16?takeout=1">
            <Button>ORDER TAKEOUT</Button>
          </a>
        </Banner>
      </Section>
    </HeaderIndex>
    <Section id="information" style={{ marginTop: "2rem" }}>
      <Intro heading="how can we help you?" />
      <ContactForm />
    </Section>
    <Section style={{width: "100vw"}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.429546569979!2d-157.82800958532957!3d21.294036885855288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006d919edfbe39%3A0x1ada82530e80ca98!2sGolden%20Eagle%20Chinese%20Restaurant!5e0!3m2!1sen!2sus!4v1594166960491!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </Section>
  </Layout>
)

export default IndexPage
