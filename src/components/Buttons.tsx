import Button from "@/components/Button";

export default function Buttons() {
  const setNewSearchParams = (params: Record<string, string>) => {
    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      searchParams.set(key, value);
    }

    globalThis.location.search = searchParams.toString();
  };

  const handleMyMRsClick = () => {
    setNewSearchParams({
      assignee_username: globalThis.unsafeWindow.gon.current_username,
      state: "opened",
    });
  };

  const handleMyReviewsClick = () => {
    setNewSearchParams({
      reviewer_username: globalThis.unsafeWindow.gon.current_username,
      state: "opened",
    });
  };

  return (
    <>
      <Button onClick={handleMyMRsClick}>My MRs</Button>
      <Button onClick={handleMyReviewsClick}>My reviews</Button>
    </>
  );
}
