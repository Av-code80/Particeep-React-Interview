import React from "react";
import classNames from "classnames";
import styles from "./pagination.module.css";

export interface Props {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  page,
  totalPages,
  handlePagination,
}) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.paginationWrapper}>
        {page !== 1 && (
          <button
            onClick={() => handlePagination(page - 1)}

            className={classNames([styles.pageItem, styles.sides].join(" "))}
          >
            &lt;
          </button>
        )}
        <button
          onClick={() => handlePagination(1)}

          className={classNames(styles.pageItem, {
            [styles.active]: page === 1,
          })}
        >
          {1}
        </button>
        {page > 3 && <div className={styles.separator}>...</div>}
        {page === totalPages && totalPages > 3 && (
          <button
            onClick={() => handlePagination(page - 2)}

            className={styles.pageItem}
          >
            {page - 2}
          </button>
        )}
        {page > 2 && (
          <button
            onClick={() => handlePagination(page - 1)}

            className={styles.pageItem}
          >
            {page - 1}
          </button>
        )}
        {page !== 1 && page !== totalPages && (
          <button
            onClick={() => handlePagination(page)}

            className={[styles.pageItem, styles.active].join(" ")}
          >
            {page}
          </button>
        )}
        {page < totalPages - 1 && (
          <button
            onClick={() => handlePagination(page + 1)}

            className={styles.pageItem}
          >
            {page + 1}
          </button>
        )}
        {page === 1 && totalPages > 3 && (
          <button
            onClick={() => handlePagination(page + 2)}

            className={styles.pageItem}
          >
            {page + 2}
          </button>
        )}
        {page < totalPages - 2 && <div className={styles.separator}>...</div>}
        {totalPages > 1 && <button
          onClick={() => handlePagination(totalPages)}

          className={classNames(styles.pageItem, {
            [styles.active]: page === totalPages,
          })}
        >
          {totalPages}
        </button>}
        {page !== totalPages && (
          <button
            onClick={() => handlePagination(page + 1)}

            className={[styles.pageItem, styles.sides].join(" ")}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination
