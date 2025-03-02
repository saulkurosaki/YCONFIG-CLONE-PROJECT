const StartupDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  return (
    <>
      <h1 className="text-3xl">This is a Startup number = {id}</h1>
    </>
  );
};

export default StartupDetailsPage;
