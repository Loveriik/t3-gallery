import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/556dcad0-4a5b-42b3-9785-4e7b545dff5b-1x4.jpg",
  "https://utfs.io/f/ef1360a1-5113-4c10-a661-2ac1854ae128-v1098b.jpg",
  "https://utfs.io/f/2fe33dd8-a279-4ee9-95ec-66e3182f32f4-76pmzl.jpg",
  "https://utfs.io/f/4d06642b-b263-414d-9d39-741b36955d0c-kb0n63.jpg",
  "https://utfs.io/f/032bfc42-869b-4e76-8ef3-7d743eff395f-r286yv.jpg",
  "https://utfs.io/f/917d4081-3e8b-4fe7-8f0e-f4d0fa500096-oiai29.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
