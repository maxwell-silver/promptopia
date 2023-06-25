"use client";

import { useEffect, useState } from "react";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";

function UserProfile({ params }) {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (params?.id)
      (async () => {
        const response = await fetch(`/api/users/${params?.id}/posts`);
        const data = response.json();

        setPosts(await data);
      })();
  }, []);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page.
       Explore ${userName}'s exceptional prompts and be inspired
        by the power of their imaginations`}
      data={posts}
    />
  );
}

export default UserProfile;
