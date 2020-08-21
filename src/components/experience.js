import React from "react"

import "../style.css"

import GithubIcon from '../../static/logo-github.svg'
import { Link } from "gatsby"

export default function Experience(props, { children }) {
  const data = props.data;
  return (
    <div>
      <h4 style={{borderBottom: "0px", marginBottom: "0.25rem"}}>
        <b style={{background: "linear-gradient(transparent 70%, var(--light-background) 0)"}}>
          {data.title} {data.link && (
            <a
              style={{background: "linear-gradient(transparent 70%, var(--light-background) 0)"}}
              href={data.link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GithubIcon}
                alt="Github Logo"
              />
            </a>
        )}
        </b>
      </h4>
      <i>{data.position}</i><span style={{float: "right"}}s>{data.time}</span>
      {data.tags && (
        <div className="cell tags">
          {data.tags.map(item => (
            <Link
              key={item}
              className={`tag-${item}`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
      <ul style={{paddingTop: "0.5rem"}}>
        {data.description && data.description.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}