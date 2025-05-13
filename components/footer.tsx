export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container flex justify-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Neil Mahajan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
