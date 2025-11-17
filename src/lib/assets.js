export async function getFonts() {
  const base = "https://raffahitipeuw.github.io/portasset/assets/fonts/";
  const res = await fetch(base + "fonts.json");
  const data = await res.json();

  return data.map(item => ({
    ...item,
    url: base + item.file,
  }));
}