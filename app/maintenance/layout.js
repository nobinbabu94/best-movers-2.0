export const metadata = {
  title: 'Site Temporarily Unavailable | Best Movers',
  description: 'This website is temporarily unavailable. Please check back later.',
};

// This layout overrides the root layout so NO header/footer is shown
export default function MaintenanceLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
