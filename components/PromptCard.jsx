"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

function PromptCard({ prompt, handleTagClick, handleEdit, handleDelete }) {
  return <div>Prompt Card</div>;
}

export default PromptCard;
