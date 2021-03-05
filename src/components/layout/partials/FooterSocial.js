import React from 'react';
import classNames from 'classnames';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://fb.com/evangelhocompletobc" target="_blank">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>Facebook</title>
              <path
                d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC3Awp183E_IbbK7dH-_-mSw" target="_blank">
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16">
              <title>YouTube</title>
              <path d="M15.67,4.39A2,2,0,0,0,14.26,3,46.82,46.82,0,0,0,8,2.64,48.66,48.66,0,0,0,1.74,3,2,2,0,0,0,.33,4.39,21.12,21.12,0,0,0,0,8.24a21,21,0,0,0,.33,3.85A2,2,0,0,0,1.74,13.5,46.92,46.92,0,0,0,8,13.84a48.66,48.66,0,0,0,6.26-.33,2,2,0,0,0,1.41-1.41A21.12,21.12,0,0,0,16,8.26,20,20,0,0,0,15.67,4.39ZM6.41,10.64V5.84l4.16,2.4Z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/evangelhocompleto" target="_blank">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <g>
                <circle cx="12.145" cy="3.892" r="1" />
                <path
                  d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                <path
                  d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z" />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;