import React, { useEffect } from 'react';
import { Row, Col, Dropdown, Card, Button, Form, ButtonGroup } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link, NavLink, useHistory } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useDispatch, useSelector } from 'react-redux';

const SupportTicketsDetail = () => {
  const router = useHistory();
  const dispatch = useDispatch();

  const title = 'Message Detail';
  const description = 'Service Provider Message Detail';
  const Id = router.location.search.slice(4);

  useEffect(() => {
    dispatch({ type: 'CONTACT_DETAILS', payload: Id });
  }, []);

  const { contactDetail } = useSelector((state) => state.reduce);
  console.log(contactDetail);
  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">Message Detail</h1>
            </Col>
            <Col xs="12" sm="auto" className="d-flex align-items-center justify-content-end">
              {/* <Dropdown className="ms-1 w-100 w-md-auto" align="end">
                <Dropdown.Toggle className="end w-100 w-md-auto" variant="outline-primary">
                  Status: Solved
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Status: Solved</Dropdown.Item>
                  <Dropdown.Item>Status: Active</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <Button
                className="btn-icon btn-icon-only"
                variant="outline-primary"
                type="button"
                onClick={() => {
                  dispatch({ type: 'CONTACT_DELETE', payload: Id });
                  router.goBack();
                }}
              >
                <i className="cs-bin" />
              </Button>
              {/* <Dropdown className="ms-1" align="end">
                <Dropdown.Toggle className="btn-icon btn-icon-only dropdown-toggle-no-arrow" variant="outline-primary">
                  <CsLineIcons icon="more-horizontal" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>User</Dropdown.Item>
                  <Dropdown.Item>History</Dropdown.Item>
                  <Dropdown.Item>Last Message</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </Col>
          </Row>

          <Row>
            <Col xxl="12" className="mb-5 mb-xxl-0 mt-5">
              {/* Ticket Details Start */}
              <Card className="mb-2">
                <Card.Body>
                  <div className="mb-4 pb-4 border-bottom border-separator-light">
                    <Row className="g-0 sh-sm-5 h-auto">
                      <Col xs="auto">
                        <img src="/img/profile/profile-9.webp" className="card-img rounded-xl sh-5 sw-5" alt="thumb" />
                      </Col>
                      <Col className="ps-3">
                        <Row className="h-100 g-2">
                          <Col className="h-sm-100 d-flex flex-column justify-content-sm-center mb-1 mb-sm-0">
                            <div>{contactDetail?.fullName}</div>
                            <div className="text-small text-muted">{contactDetail?.emailAddress}</div>
                          </Col>
                          <Col
                            xs="12"
                            className="order-3 order-sm-0 col-sm-auto sw-sm-11 sw-sm-11 lh-1-5 text-small text-muted text-sm-end d-flex flex-column justify-content-sm-center"
                          >
                            12 Feb 2021 19:25
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <div>
                      <div className="mt-4">
                        <p>{contactDetail?.field}</p>
                        <p>{contactDetail?.message}</p>
                        <p className="mb-0">
                          <Link>
                            <CsLineIcons icon="email" className="mx-2" />
                            {contactDetail?.emailAddress}
                          </Link>
                          <br />
                          <Link>
                            <CsLineIcons icon="phone" className="mx-2" />
                            {contactDetail?.phoneNumber}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div>
                    <div>
                      <div className="mt-4 d-flex flex-row flex-wrap">
                        <div className="sw-30 me-2 mb-2">
                          <Row className="g-0 rounded-sm sh-8 border">
                            <Col xs="auto">
                              <div className="sw-10 d-flex justify-content-center align-items-center h-100">
                                <CsLineIcons icon="file-text" className="text-primary" />
                              </div>
                            </Col>
                            <Col className="rounded-sm-end d-flex flex-column justify-content-center pe-3">
                              <div className="d-flex justify-content-between">
                                <p className="mb-0 clamp-line" data-line="1">
                                  nice_recipe.doc
                                </p>
                                <NavLink to="#">
                                  <CsLineIcons icon="download" size="17" className="alternate-link" />
                                </NavLink>
                              </div>
                              <div className="text-small text-primary">521 KB</div>
                            </Col>
                          </Row>
                        </div>
                        <div className="sw-30 me-2 mb-2">
                          <Row className="g-0 rounded-sm sh-8 border">
                            <Col xs="auto">
                              <div className="sw-10 d-flex justify-content-center align-items-center h-100">
                                <CsLineIcons icon="file-text" className="text-primary" />
                              </div>
                            </Col>
                            <Col className="rounded-sm-end d-flex flex-column justify-content-center pe-3">
                              <div className="d-flex justify-content-between">
                                <p className="mb-0 clamp-line" data-line="1">
                                  bread_making.doc
                                </p>
                                <NavLink to="#">
                                  <CsLineIcons icon="download" size="17" className="alternate-link" />
                                </NavLink>
                              </div>
                              <div className="text-small text-primary">521 KB</div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </Card.Body>
              </Card>
              {/* Ticket Details End */}

              {/* Ticket Answer Start */}
              {/* <Card>
                <Card.Body>
                  <div className="mb-3 filled">
                    <CsLineIcons icon="notebook-1" />
                    <Form.Control as="textarea" rows={5} placeholder="Answer" />
                  </div>
                  <Button variant="outline-primary" className="btn-icon btn-icon-end">
                    <span>Send</span> <CsLineIcons icon="send" />
                  </Button>
                  <Button variant="outline-primary" className=" btn-icon btn-icon-only ms-1">
                    <CsLineIcons icon="attachment" />
                  </Button>
                </Card.Body>
              </Card> */}
              {/* Ticket Answer End */}
            </Col>
          </Row>
        </div>
        {/* Title End */}
      </Col>
    </>
  );
};

export default SupportTicketsDetail;
