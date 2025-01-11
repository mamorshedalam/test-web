export async function generateStaticParams() {
     return [
       { params: { slug: '_not-found' } },
     ];
   }
   export default function Custom404() {
     return <div>404 - Page Not Found</div>;
}