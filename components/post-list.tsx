import Link from 'next/link';
import { Post } from '@/.contentlayer/generated';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';

export function PostsList({ allPosts }: { allPosts: Post[] }) {
  return (
    <section className="my-8 space-y-8">
      <h2 className="font-heading text-xl md:text-2xl dark:text-white">
        Últimos posteos:
      </h2>
      <div>
        {allPosts.length > 0 ? (
          <ol
            id="posts-grid"
            className="relative border-l border-gray-200 dark:border-gray-700"
          >
            {allPosts.map((post) => (
              <li key={post.slug} className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                    {formatDate(post.date)}
                  </time>
                  <Link href={post.slug}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={80}
                      height={80}
                      className="my-2 aspect-video rounded-lg object-cover"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="text-sm md:w-[70ch] text-gray-500 dark:text-gray-400">
                      {post.description}
                    </p>
                  </Link>
                  <Link
                    href={post.slug}
                    // className="text-blueSecondary dark:text-indigo-300 inline-flex items-center"
                    className="link inline-flex items-center"
                  >
                    Seguir leyendo{' '}
                    <svg
                      className="w-3 h-3 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-10 text-center text-lg">
            No se encontraron publicaciones
          </p>
        )}
        <Link
          href="/blog"
          className="p-2 transition-colors bg-violetPrimary/10 hover:bg-violetPrimary/30 dark:bg-violetPrimary/30 dark:hover:bg-violetPrimary/40 rounded-md"
        >
          Ver todos
        </Link>
      </div>
    </section>
  );
}
