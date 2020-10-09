import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Jobs = () => {
  const data = useStaticQuery(query);
  // console.log(data)
  const {allStrapiJobs: {nodes: jobs}} = data
  // react useState hook
  const [ value, setValue ] = React.useState(0);

  const { date, company, position, desc } = jobs[value];

  console.log(date, company, position, desc)
  return (
    <section className="section jobs">
      <Title title="expierence" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button onClick={() => setValue(index)} className={`job-btn ${index === value && "active-btn"}`} key={item.strapiId}>{item.company}</button>
            )
          })}
        </div>

        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map((item) => {
            return (
              <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{item.name}</p>
            </div>
          )
          })}
        </article>
      </div>
      <Link to="/about" className="btn certer-btn">more info</Link>
    </section>
  )
}

export const query = graphql`
  {
    allStrapiJobs(sort: {fields: id, order: ASC}) {
      nodes {
        strapiId
        date
        company
        position
        desc {
          id
          name
        }
      }
    }
  }
`
export default Jobs
