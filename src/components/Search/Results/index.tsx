import styles from './index.module.scss';
import Editor from '../../Editor';
import useEditor from '../../../hooks/useEditor';
import Fragment from '../../Fragment';
import { Company } from '../../../lib/company';

interface ResultsProps {
  companies: Company[],
}

function pseudoClassification(companyId: number) {
  if(companyId % 2 == 0)
    return '-';
  if(companyId % 3 == 0)
    return 'Relevant';
  return 'Irrelevant';
}

function Results(props: ResultsProps) {
  const [company, setCompany] = useEditor();

  return <Fragment>
    <div className={styles.container}>
      <Editor company={company} setCompany={setCompany} />
      <table className={styles.results} width='100%'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Classification</th>
          </tr>
        </thead>
        <tbody>
          {
            props.companies.map(company => {
              return <tr onClick={(e) => {
                e.stopPropagation();
                setCompany(company);
              }}>
                <td>
                  <a href={`https://sp-edge.com/companies/${company.id}`} target="_blank">{company.name}</a>
                </td>
                <td className={styles.score}>{company.scores[1]}</td>
                <td className={styles.classification}>
                  {pseudoClassification(company.id)}
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  </Fragment>
}

export default Results;