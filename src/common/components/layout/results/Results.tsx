import styles from "./Results.module.css"

import { ItemSet } from "@components/set";
import { Toast } from "@components/utils"

function Results() {
  return (
    <section className={styles.section}>
      <Toast />
        <div className={styles.containerSets}>
          <ItemSet />
          <ItemSet />
        </div>
        
        <div className={styles.containerResults}>
          <p className={styles.textResult}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet possimus perspiciatis quam maxime. Facere voluptates perspiciatis eum repudiandae commodi minima natus iusto odio eaque exercitationem, quisquam quod voluptatum aspernatur id!</p>
          <p className={styles.textResult}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente consequatur voluptatum tempora. Ad iure rem porro perferendis aut odit, dolorem fugiat, culpa amet, itaque dolorum illum tempora deserunt eum! Incidunt!</p>
        </div>
    </section>
  )
}

export default Results