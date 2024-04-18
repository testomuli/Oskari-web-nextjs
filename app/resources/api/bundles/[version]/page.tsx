
export default async function BundlesVersionPage({
  params,
}: {
  params: { version: string }
}) {

  return <>
    <h1>BUNDLES - {params.version}</h1>
  </>;
}
