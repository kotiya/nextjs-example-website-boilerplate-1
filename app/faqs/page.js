import React from 'react';
import Router from 'next/router';

import { mapGlobals, mapFaqs } from 'utils/helperFuncs';
import Metadata from 'components/widgets/Metadata';
import Faq from 'components/views/faq'
import Header from 'components/views/partials/header'
import Footer from 'components/views/partials/footer'
import Request from 'utils/request';

class FaqPage extends React.Component {

  static async getInitialProps({ req, query }) {
    const Response = await Request.getGlobals();
    const faqResponse = await Request.getObject('faqs');
    const faq = mapFaqs(faqResponse.object);
    const globals = mapGlobals(Response.objects);
    return { globals, faq };
  }

  constructor(props){
    super(props);
    this.state = {
        header: props.globals.header,
        contact_form: props.globals.contact_form,
        nav: props.globals.nav,
        social: props.globals.social,
        contactInfo: props.globals.contact_info.metadata,
        footer: props.globals.footer,
        faq: props.faq
    }
  }

    render() {
        return (
      <Metadata>
        <Metadata.Head>
          <Metadata.Title>Medical Professional ~ Cosmic JS Next Js App</Metadata.Title>
          <Metadata.Description content={ this.state.faq.seo_description.value } />
          <Metadata.Link rel="icon" type="image/png" href={`${this.state.header.metadata.favicon.imgix_url}?w=32`} sizes="32x32" />
          <Metadata.Link rel="icon" type="image/png" href={`${this.state.header.metadata.favicon.imgix_url}?w=16`} sizes="16x16" />
        </Metadata.Head>
        <Header header={this.state.header} nav={this.state.nav} />
        <Faq faq={this.state.faq}></Faq>
        <Footer footer={this.state.footer} social={this.state.social} contactInfo={this.state.contactInfo} />
      </Metadata>
        );
    }
}

export default FaqPage;