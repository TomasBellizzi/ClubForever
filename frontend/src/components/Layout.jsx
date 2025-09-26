import 'bootstrap/dist/css/bootstrap.min.css';

function Layout({ children }) {
  return (
    <div className="layout-container">
      {children}
    </div>
  );
}

export default Layout;
