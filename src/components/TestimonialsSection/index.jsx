import React, { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    id: 1,
    name: "Arlene McCoy",
    role: "CEO of GrowthPro",
    text: `"Albert's ability to turn ideas into reality is unmatched. The landing pages he designed for our campaigns exceeded our expectations and helped boost conversions by 30%."`,
    image: "/testimonials/arlene.jpg",
    bg: "#fdf2e9",
  },
  {
    id: 2,
    name: "Dianne Russel",
    role: "Web Developer",
    text: `"Working with Albert has been an absolute pleasure. His designs are not only visually stunning but also incredibly user-friendly. Our website traffic and customer engagement have significantly increased."`,
    image: "/testimonials/dianne.jpg",
    bg: "#ff5c5c",
    highlight: true,
  },
  {
    id: 3,
    name: "Emma Brown",
    role: "Founder of Creative Studios",
    text: `"I highly recommend Albert for anyone seeking professional and elegant web design solutions. His attention to detail and creativity are truly commendable."`,
    image: "/testimonials/emma.jpg",
    bg: "#fdf2e9",
  },
  {
    id: 4,
    name: "Lucas Silva",
    role: "Marketing Manager",
    text: `"Thanks to Albert's expertise, our ad campaigns now deliver 2x more qualified leads. The process was smooth and very professional."`,
    image: "/testimonials/lucas.jpg",
    bg: "#fdf2e9",
  },
  {
    id: 5,
    name: "Sofia Almeida",
    role: "Product Designer",
    text: `"Albert's creative vision transformed our brand identity. The result was modern, clean, and perfectly aligned with our mission."`,
    image: "/testimonials/sofia.jpg",
    bg: "#fdf2e9",
  },
];

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);

  // Quantos cards por página
  const itemsPerPage = 3;

  const pageCount = Math.ceil(testimonials.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  }, [currentPage]);

  return (
    <section className={styles.section}>
      <p className={styles.subtitle}>TESTIMONIAL</p>
      <h2 className={styles.title}>
        WHAT MY <span>CLIENTS</span> SAY
      </h2>

      <div className={styles.grid}>
        {currentItems.map((t) => (
          <div
            key={t.id}
            className={`${styles.card} ${t.highlight ? styles.highlight : ""}`}
            style={{ background: t.bg }}
          >
            <div className={styles.cardHeader}>
              <img src={t.image} alt={t.name} className={styles.avatar} />
              <div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            </div>
            <p className={styles.text}>{t.text}</p>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <ReactPaginate
        breakLabel="…"
        nextLabel="→"
        previousLabel="←"
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        onPageChange={(e) => setCurrentPage(e.selected)}
        forcePage={currentPage}
        renderOnZeroPageCount={null}
        // CSS
        containerClassName={styles.pagination}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
        previousClassName={styles.pageItem}
        previousLinkClassName={styles.pageLink}
        nextClassName={styles.pageItem}
        nextLinkClassName={styles.pageLink}
        breakClassName={styles.pageItem}
        breakLinkClassName={styles.pageLink}
        activeClassName={styles.active}
        disabledClassName={styles.disabled}
      />
    </section>
  );
}
