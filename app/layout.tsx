const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={` font-poppins  antialiased  bg-shop-light-pink`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
