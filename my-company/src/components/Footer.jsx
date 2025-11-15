function Footer() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px",
        backgroundColor: "#222",
        color: "white",
        marginTop: "20px"
      }}
    >
      © {new Date().getFullYear()} My Company. All rights reserved.
    </div>
  );
}

export default Footer;