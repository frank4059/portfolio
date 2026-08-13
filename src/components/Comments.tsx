"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialComments, profile } from "@/data";
import type { Comment } from "@/data";
import MotionReveal from "./MotionReveal";
import Section from "./Section";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Avatar({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
      style={{ backgroundColor: color }}
    >
      {initials(name)}
    </span>
  );
}

function CommentItem({
  comment,
  onReply,
}: {
  comment: Comment;
  onReply: (text: string) => void;
}) {
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState("");

  const submitReply = () => {
    if (!replyText.trim()) return;
    onReply(replyText.trim());
    setReplyText("");
    setReplying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      className="rounded-3xl border border-line p-5"
    >
      <div className="flex gap-4">
        <Avatar name={comment.name} color={comment.avatarColor} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3">
            <p className="font-bold">{comment.name}</p>
            <p className="text-xs text-muted">{comment.date}</p>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {comment.text}
          </p>
          <button
            onClick={() => setReplying((prev) => !prev)}
            className="mt-3 text-xs font-semibold tracking-wide text-muted uppercase transition-colors hover:text-foreground"
          >
            Reply
          </button>

          {comment.replies?.map((reply) => (
            <div key={`${reply.name}-${reply.date}`} className="mt-4 flex gap-3">
              <Avatar name={reply.name} color={reply.avatarColor} />
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <p className="text-sm font-bold">{reply.name}</p>
                  <p className="text-xs text-muted">{reply.date}</p>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {reply.text}
                </p>
              </div>
            </div>
          ))}

          {replying && (
            <div className="mt-4 flex gap-3">
              <Avatar name={profile.name} color="#0a0a0a" />
              <div className="flex-1">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Escribe una respuesta..."
                  rows={2}
                  className="w-full resize-none rounded-xl border border-line bg-background p-3 text-sm outline-none focus:border-foreground"
                />
                <div className="mt-2 flex justify-end gap-2">
                  <button
                    onClick={() => setReplying(false)}
                    className="h-9 rounded-full px-4 text-xs font-semibold"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={submitReply}
                    disabled={!replyText.trim()}
                    className="h-9 rounded-full bg-foreground px-4 text-xs font-semibold text-background disabled:opacity-40"
                  >
                    Responder
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [text, setText] = useState("");

  const postComment = () => {
    if (!text.trim()) return;
    setComments((prev) => [
      {
        id: Date.now(),
        name: "Tú",
        date: new Date().toLocaleDateString("es-ES", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        text: text.trim(),
        avatarColor: "#7c3aed",
      },
      ...prev,
    ]);
    setText("");
  };

  const addReply = (commentId: number, replyText: string) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [
                ...(comment.replies ?? []),
                {
                  name: profile.name,
                  date: "Hoy",
                  text: replyText,
                  avatarColor: "#0a0a0a",
                },
              ],
            }
          : comment,
      ),
    );
  };

  return (
    <Section id="comentarios" title="Comentarios" subtitle="Interacción">
      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div>
          <MotionReveal>
            <div className="rounded-3xl border border-line p-5">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Deja tu opinión sobre los proyectos..."
                rows={4}
                className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-muted"
              />
              <div className="mt-3 flex justify-end">
                <button
                  onClick={postComment}
                  disabled={!text.trim()}
                  className="h-11 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-85 disabled:opacity-40"
                >
                  Post a Comment
                </button>
              </div>
            </div>
          </MotionReveal>

          <div className="mt-8 space-y-4">
            <AnimatePresence initial={false}>
              {comments.map((comment) => (
                <CommentItem
                  key={comment.id}
                  comment={comment}
                  onReply={(replyText) => addReply(comment.id, replyText)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        <MotionReveal delay={0.1}>
          <div className="rounded-3xl border border-line p-6 lg:sticky lg:top-8">
            <h3 className="text-xs font-semibold tracking-[0.25em] text-muted uppercase">
              Sobre el creador
            </h3>
            <p className="mt-4 text-3xl font-bold uppercase">
              {profile.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {profile.description}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-6 text-sm">
              <div>
                <p className="font-bold">{profile.stats.likes}</p>
                <p className="text-xs text-muted">likes</p>
              </div>
              <div>
                <p className="font-bold">{profile.stats.views}</p>
                <p className="text-xs text-muted">vistas</p>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </Section>
  );
}