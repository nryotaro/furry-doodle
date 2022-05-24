import styles from './index.module.scss';
import Editor from '../../Editor';
import useEditor from '../../../hooks/useEditor';
import Fragment from '../../Fragment';
import { Company } from '../../../lib/company';

interface ResultsProps {
  companies: Company[],
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
                  <a href={`https://sp-edge.com/companies/${company.id}`}>{company.name}</a>
                </td>
                <td className={styles.score}>{company.scores[1]}</td>
                <td className={styles.classification}>-</td>
              </tr>
            })
          }
          {/* <tr onClick={(e) => {
            e.stopPropagation();
            setCompany('doge');
          }}>
            <td><a href='https://sp-edge.com'>doge</a></td>
            <td className={styles.score}><span>b</span></td>
            <td className={styles.classification}>Relevant</td>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>Irrelevant</td>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>-</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  </Fragment>
}

export default Results;