export function shouldHideLayout(pathname) {
  const hideLayoutPaths = [
    "/cikolota-magazasi-teklif/temalar",
    "/cikolota-magazasi-teklif",
  ];
  return hideLayoutPaths.includes(pathname);
}
