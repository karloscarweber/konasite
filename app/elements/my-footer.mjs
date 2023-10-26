export default function MyFooter({ html }) {
  return html`
    <footer>
      <section>
        <nav>
          <a href=/>home</a>
          <a href=/about>about</a>
          <!-- <a href=/getting-started>get started</a>
          <a href=/community>community</a>
          <a href=/download>download</a> -->
          <a href=/changelog>changelog</a>
        </nav>
        <p>Kona is &copy; 2023 Karl Oscar Weber</p>
      </section>
    </footer>
  `
}
