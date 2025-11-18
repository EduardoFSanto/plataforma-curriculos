import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const role = formData.get("role") as string;
  const curriculum = formData.get("curriculum") as File;

  // Aqui você pode salvar no seu DB via Prisma
  await prisma.candidate.create({
    data: {
      name,
      email,
      phone,
      role,
      curriculumUrl: "arquivo-aqui", // você define depois como salvar arquivo
    },
  });

  return NextResponse.json({ ok: true });
}
