import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-4xl font-bold">온라인 오목</h1>
      <p className="mb-8 text-gray-600">실시간 멀티플레이어 오목 게임에 오신 것을 환영합니다!</p>
      <div className="space-x-4">
        <button className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          게임 시작
        </button>
        <button className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100">
          게임 방법
        </button>
      </div>
    </div>
  );
}
