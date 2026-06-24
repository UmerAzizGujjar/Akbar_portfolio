import { Wrench, Database, FileCode, Globe, Terminal, GitBranch, FileSpreadsheet, MessagesSquare } from "lucide-react"

const tools = [
  { name: "Jira", icon: Wrench, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "Postman", icon: FileCode, color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "Git", icon: GitBranch, color: "text-orange-600", bg: "bg-orange-600/10" },
  { name: "SQL", icon: Database, color: "text-blue-600", bg: "bg-blue-600/10" },
  { name: "Python", icon: Terminal, color: "text-yellow-600", bg: "bg-yellow-600/10" },
  { name: "JavaScript", icon: Globe, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { name: "Excel", icon: FileSpreadsheet, color: "text-green-600", bg: "bg-green-600/10" },
  { name: "Trello", icon: MessagesSquare, color: "text-blue-400", bg: "bg-blue-400/10" },
]

export function ToolsGrid() {
  return (
    <div className="mt-6 rounded-xl border border-border bg-card p-6">
      <h3 className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Familiar Tools & Technologies
      </h3>
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
        {tools.map((tool) => {
          const Icon = tool.icon
          return (
            <div
              key={tool.name}
              className="flex flex-col items-center gap-1.5 rounded-lg p-3 transition-colors hover:bg-secondary/50"
            >
              <span className={`flex size-9 items-center justify-center rounded-lg ${tool.bg} ${tool.color}`}>
                <Icon className="size-4" />
              </span>
              <span className="text-[10px] font-medium text-muted-foreground">
                {tool.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
