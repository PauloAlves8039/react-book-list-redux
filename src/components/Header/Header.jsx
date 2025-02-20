export default function Header({pageTitle}) {
  return (
      <>
        <h1>{pageTitle}</h1>

          <div className="header-btns">
              <button className="btn">
                  Books
              </button>

              <button className="btn">
                  Add Book +
              </button>
          </div>

      </>
  )
}
