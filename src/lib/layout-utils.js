export function shouldHideLayout(pathname) {
  const hideLayoutPaths = [
    "/cikolata-magazasi-teklif/temalar",
    "/cikolata-magazasi-teklif",
  ];
  return hideLayoutPaths.includes(pathname);
}
