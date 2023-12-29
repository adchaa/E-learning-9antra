import styles from "./Table.module.css";
import deleteIcon from "../../assets/delete-icon.svg";
import editIcon from "../../assets/edit-icon.svg";

export default function Table(props) {
  const { values, headers, deleteFn, updateFn, title, addFn } = props;
  return (
    <div>
      <div className={styles.header}>
        <h3 style={{ marginBottom: "0px" }}>{title}</h3>
        <button onClick={addFn} className={styles.addbtn}>
          Add
        </button>
      </div>
      <table className="content-table">
        <thead>
          <tr>
            {headers.map((col) => (
              <th key={col}>{col}</th>
            ))}
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {values.map((value) => (
            <tr key={value._id}>
              {headers.map((header, index) => {
                return <td key={index}>{value[header] || "null"}</td>;
              })}
              <td>
                <button
                  onClick={() => updateFn(value._id)}
                  className={styles.btnNoStyle}
                >
                  <img
                    className={`${styles.icon} ${styles.blueIcon}`}
                    src={editIcon}
                  />
                </button>
                <button
                  onClick={() => deleteFn(value._id)}
                  className={styles.btnNoStyle}
                >
                  <img
                    className={`${styles.icon} ${styles.redIcon}`}
                    src={deleteIcon}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
