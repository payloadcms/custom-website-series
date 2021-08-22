import React, { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { Cell, Grid } from '@faceless-ui/css-grid';
import Head from '../components/Head';
import Template from '../components/layout/Template';
import { Type as FooterType } from '../globals/Footer';
import { Type as SocialMediaType } from '../globals/SocialMedia';
import GridContainer from '../components/layout/GridContainer';
import useStyles from '../css/pages/contact';
import Form from '../components/forms/Form';
import Message, { initialMessage } from '../components/contact/Message';
import Email from '../components/contact/Email';

export type Props = {
  statusCode: number
  footer: FooterType
  socialMedia: SocialMediaType
}

const initialState = {
  message: {
    value: initialMessage,
    initialValue: initialMessage,
    valid: true,
  },
};

const Contact: React.FC<Props> = (props) => {
  const { footer, socialMedia } = props;
  const [submitted, setSubmitted] = useState(false);
  const classes = useStyles();

  const handleSubmit = useCallback(async (data) => {
    const res = await fetch('/api/form-submissions', {
      body: JSON.stringify({
        ...data,
        source: 'Website Contact Page',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
    });

    if (res.status === 201) {
      setSubmitted(true);
    } else {
      toast.error('There was a problem submitting your request. Please check your submission and try again, or email us directly.');
    }
  }, []);

  return (
    <Template
      className={classes.contact}
      footer={footer}
      socialMedia={socialMedia}
    >
      <Head
        title="Contact"
        description="Contact us to get started on a new project, consult with us, get some advice, or anything you'd like."
        keywords="contact"
      />
      <GridContainer>
        <header>
          <h1 className={classes.title}>Contact</h1>
        </header>
        <Grid className={classes.wrap}>
          <Cell
            cols={7}
            colsM={8}
            className={classes.message}
          >
            {submitted && (
              <div className={classes.success}>
                <h3>Thank you</h3>
                <p>We will reach out to the email you&apos;ve provided as soon as possible. We look forward to talking!</p>
              </div>
            )}
            {!submitted && (
              <Form
                className={classes.form}
                onSubmit={handleSubmit}
                initialState={initialState}
              >
                <Message />
                <Email />
              </Form>
            )}
          </Cell>
          <Cell
            cols={4}
            start={9}
            startM={1}
            colsM={8}
            className={classes.contactInfo}
          >
            <h5 className={classes.instructions}>Edit the message provided or delete it and write your own.</h5>
            <hr className={classes.hr} />
            <div className={classes.section}>
              <p style={{ margin: 0 }}>
                <a
                  className={classes.link}
                  href="tel:6161234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  616-123-4567
                </a>
              </p>
            </div>
            <div className={classes.section}>
              <p style={{ margin: 0 }}>
                <a
                  className={classes.link}
                  href="https://www.google.com/maps/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  123 Address Goes Here,
                  <br />
                  Grand Rapids, MI 49504
                </a>
              </p>
            </div>
            <div className={classes.section}>
              <p style={{ margin: 0 }}>
                <a
                  href="mailto:info@payloadcms.com"
                  className={classes.link}
                >
                  info@payloadcms.com
                </a>
              </p>
            </div>
          </Cell>
        </Grid>
      </GridContainer>
    </Template>
  );
};

export default Contact;
