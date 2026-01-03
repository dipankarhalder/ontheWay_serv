import styled from "styled-components";

export const AppMainLayoutCover = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

export const AppTableDataInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px 0;

  .under_construction {
    display: flex;
    height: 200px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.sidebar};
    border: 1px solid ${({ theme }) => theme.colors.tableborder};

    & > h3 {
      font-size: 19px;
      font-weight: 700;
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.black};
    }

    & > p {
      text-align: center;
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 2px;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const ApplicationCoverContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const AppMainPageHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const AppContentDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.tableborder};
`;

export const AppDashboardCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 24px 0;

  .app_dashobard_heading {
    width: 100%;
    margin-bottom: 20px;

    h1 {
      font-size: 21px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.black};

      & > span {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.btnbg};
      }
    }

    & > p {
      font-size: 15px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.bodytext};
    }
  }

  .app_overview_main_cover {
    display: flex;
    width: 100%;
    gap: 30px;
  }

  .app_init_dashboard {
    width: 40%;
    display: flex;

    & > ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;

      & > li {
        width: calc(50% - 8px);

        .app_child_inside {
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          height: 196px;

          .app_child_left {
            width: 100%;
            padding: 12px 18px;
            margin-bottom: -14px;

            .app_title_child {
              width: 100%;
              display: flex;
              align-items: center;
              gap: 10px;
              margin-bottom: 6px;

              & > span {
                width: 26px;
                height: 26px;

                & > svg {
                  width: 26px;
                  height: 26px;
                }
              }

              p {
                font-size: 15px;
                font-weight: 700;
              }
            }

            .app_icon_child {
              width: 100%;
              display: flex;

              h6 {
                display: flex;
                font-size: 18px;
                font-weight: 700;
                align-items: center;
                gap: 10px;
                color: ${({ theme }) => theme.colors.bodytext};

                & > span {
                  color: #717171;
                  font-size: 13px;
                }
              }
            }
          }

          .app_child_right {
            width: 100%;
          }

          &.app_collection {
            border: 1px solid #4f46e5;
            background: #dfddffff;
            span > svg > path {
              stroke: #4f46e5;
            }
            p {
              color: #4f46e5;
            }
          }
          &.app_expense {
            border: 1px solid #db8311ff;
            background: #fff3e5;
            span > svg > path {
              stroke: #db8311ff;
            }
            p {
              color: #db8311ff;
            }
          }
          &.app_student {
            border: 1px solid #42870a;
            background: #f1ffe6;
            span > svg > path {
              stroke: #42870a;
            }
            p {
              color: #42870a;
            }
          }
          &.app_non_teacher {
            border: 1px solid #0a7890;
            background: #daf8ff;
            span > svg > path {
              stroke: #0a7890;
            }
            p {
              color: #0a7890;
            }
          }
        }
      }
    }
  }

  .app_parcel_overview {
    width: 28%;
    margin-bottom: 20px;

    & > ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 16px;

      & > li {
        gap: 16px;
        display: flex;
        align-ietms: center;
        border-radius: 6px;
        padding: 15px 20px;
        background: ${({ theme }) => theme.colors.sidebar};

        & > span {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.05);

          & > svg {
            width: 30px;
            height: 30px;
          }
        }

        .app_parcel_info {
          display: flex;
          flex-direction: column;

          p {
            font-size: 17px;
            font-weight: 600;
          }

          h6 {
            font-size: 22px;
            font-weight: 700;
          }
        }

        &:nth-child(1) {
          border: 1px solid #4f46e5;
          background: rgba(223, 221, 255, 1);
          & > span > svg > path {
            stroke: #4f46e5;
          }
          h6 {
            color: #4f46e5;
          }
        }
        &:nth-child(2) {
          background: #f1ffe6;
          border: 1px solid #42870a;
          & > span > svg > path {
            stroke: #42870a;
          }
          h6 {
            color: #42870a;
          }
        }
        &:nth-child(3) {
          background: #fff3e5;
          border: 1px solid #db8311ff;
          & > span > svg > path {
            stroke: #db8311ff;
          }
          h6 {
            color: #db8311ff;
          }
        }
        &:nth-child(4) {
          background: #ffe8e8ff;
          border: 1px solid #ff4f4f;
          & > span > svg > path {
            stroke: #ff4f4f;
          }
          h6 {
            color: #ff4f4f;
          }
        }
      }
    }
  }

  .app_doughnut_chart {
    width: 32%;
  }

  .app_overview_graph {
    display: flex;
    width: 100%;
    margin-top: 30px;
    gap: 16px;

    .app_revenue_overview {
      width: 50%;
      display: flex;
      border-radius: 6px;
      padding: 12px 13px;
      flex-direction: column;
      border: 1px solid ${({ theme }) => theme.colors.tableborder};

      .app_rev_heading {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;

        h3 {
          font-size: 14px;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.black};
        }

        select {
          height: 26px;
          padding: 0 7px 0 6px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 12px;
          border: 1px solid ${({ theme }) => theme.colors.tableborder};
        }
      }
    }
  }

  .app_payroll_graph {
    display: flex;
    width: 100%;
    margin-top: 16px;
    gap: 16px;

    .app_dept_graph {
      width: 50%;
      display: flex;
      border-radius: 6px;
      padding: 12px 13px;
      flex-direction: column;
      border: 1px solid ${({ theme }) => theme.colors.tableborder};

      h3 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 16px;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .app_dept_graph_full {
      width: 100%;
      display: flex;
      border-radius: 6px;
      padding: 12px 13px;
      flex-direction: column;
      border: 1px solid ${({ theme }) => theme.colors.tableborder};

      h3 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 16px;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .app_doug_graph_first {
      width: 33.3%;
      display: flex;
      border-radius: 6px;
      padding: 12px 13px;
      flex-direction: column;
      border: 1px solid ${({ theme }) => theme.colors.tableborder};

      h3 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 16px;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .app_doug_graph {
      width: 33.3%;
      display: flex;
      border-radius: 6px;
      padding: 12px 13px;
      flex-direction: column;
      border: 1px solid ${({ theme }) => theme.colors.tableborder};

      h3 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 16px;
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }

  .app_analisys_heading {
    display: flex;
    width: 100%;

    & > h2 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: -16px;
    }
  }

  .app_more_btns {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 30px;

    a {
      font-weight: 600;
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const AppOnlineAdmissionForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 100px;
  width: 100%;

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const AppFormApplication = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  .app_btn_form {
    display: flex;
    width: auto;
    margin-left: 30%;
    margin-top: 40px;
  }

  .app_form_online_wrap {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    .app_form_heading {
      width: 30%;

      & > p {
        font-size: 13px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.bodytext};
      }
    }

    .app_form_online_content {
      width: 70%;
      margin-bottom: 20px;

      .full_row {
        display: flex;
        width: 100%;
        margin-bottom: 10px;
      }

      .half_row {
        display: flex;
        width: 100%;
        gap: 10px;
        margin-bottom: 10px;

        .inside {
          display: flex;
          flex-direction: column;
          width: 100%;

          & > p {
            font-size: 14px;
            margin-bottom: 3px;
          }

          & > select {
            width: auto;
            height: 42px;
            padding: 0 16px;
            border-radius: 6px;
            font-weight: 500;
            font-size: 15px;
            border: 1px solid ${({ theme }) => theme.colors.tableborder};
          }
        }
      }

      .all_form_field {
        display: flex;
        width: 100%;
        flex-direction: column;
        margin-bottom: 10px;

        & > p {
          font-size: 14px;
          margin-bottom: 3px;
        }

        .app_form_grup {
          display: flex;
          width: 100%;
          gap: 10px;

          & > select {
            width: auto;
            height: 42px;
            padding: 0 16px;
            border-radius: 6px;
            font-weight: 500;
            font-size: 15px;
            border: 1px solid ${({ theme }) => theme.colors.tableborder};
          }
        }
      }
    }
  }
`;

export const AppItemViewCover = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100dvh;
  z-index: 12;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-end;

  .internalDetailsContent {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    margin-right: 16px;
    width: 800px;
    border-radius: 8px;
    padding: 20px 24px;
    position: relative;
    overflow-y: auto;
    height: calc(100dvh - 32px);
    background: ${({ theme }) => theme.colors.white};

    .app_close {
      width: 20px;
      height: 20px;
      position: absolute;
      right: 12px;
      top: 12px;
      cursor: pointer;

      & > span {
        width: 20px;
        height: 20px;

        & > svg {
          width: 20px;
          height: 20px;
        }
      }
    }
    h2 {
      width: 100%;
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 24px;
      color: ${({ theme }) => theme.colors.gray};
    }

    .app_detailsSection {
      width: 100%;
      margin-bottom: 26px;

      h3 {
        width: 100%;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 3px;
        color: ${({ theme }) => theme.colors.black};
      }

      .app_details_course {
        width: 100%;
        padding: 12px 19px;
        border-radius: 6px;
        background: ${({ theme }) => theme.colors.sidebar};
        border: 1px solid ${({ theme }) => theme.colors.tableborder};

        & > ul {
          display: flex;
          width: 100%;
          flex-direction: column;

          & > li {
            display: flex;
            width: 100%;
            gap: 10px;
            margin-bottom: 4px;
            font-size: 15px;

            & > span {
              font-weight: 500;
              color: ${({ theme }) => theme.colors.gray};
            }

            & > p {
              font-weight: 600;
              color: ${({ theme }) => theme.colors.black};
            }
          }
        }

        .app_sub_list {
          width: 100%;
          display: flex;
          gap: 10px;
          margin-top: 20px;
          margin-bottom: 10px;

          & > span {
            cursor: pointer;
            font-size: 13px;
            font-weight: 600;
            padding: 5px 12px 4px;
            border-radius: 6px;
            background: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.tableborder};

            &.actv_item_sub {
              background: ${({ theme }) => theme.colors.infobg};
              color: ${({ theme }) => theme.colors.hblue};
              border: 1px solid ${({ theme }) => theme.colors.hblue};
            }
          }
        }

        .details_elem_cover {
          width: 100%;
          display: flex;

          .main_sub_wrap {
            display: flex;
            width: 100%;
            flex-direction: column;
            gap: 10px;

            .details_cover {
              width: 100%;
              display: flex;
              flex-direction: column;
              gap: 10px;
              padding: 10px 16px;
              border-radius: 8px;
              background: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.tableborder};

              & > p {
                font-size: 16px;
                font-weight: 600;
                color: ${({ theme }) => theme.colors.black};
              }

              .details_table {
                display: flex;
                flex-direction: column;

                .details_row {
                  display: flex;
                  flex-wrap: wrap;

                  & > span {
                    font-size: 12px;
                    font-weight: 700;
                    margin-bottom: 4px;
                    text-transform: uppercase;
                    color: #acacac;

                    &:nth-child(1) {
                      width: 12%;
                    }
                    &:nth-child(2) {
                      width: 64%;
                    }
                    &:nth-child(3) {
                      width: 12%;
                    }
                    &:nth-child(4) {
                      width: 12%;
                    }
                  }

                  & > p {
                    font-size: 13px;
                    font-weight: 600;
                    margin-bottom: 4px;
                    color: ${({ theme }) => theme.colors.black};

                    &:nth-child(1) {
                      width: 12%;
                    }
                    &:nth-child(2) {
                      width: 64%;
                    }
                    &:nth-child(3) {
                      width: 12%;
                    }
                    &:nth-child(4) {
                      width: 12%;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
