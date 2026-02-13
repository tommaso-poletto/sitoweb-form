import { useState, useEffect } from "react";
import { simulatedDb } from "@/lib/simulatedDb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Database, Users, FileText, Activity, RefreshCw, Trash2, Home, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const AdminDashboard = () => {
  const [data, setData] = useState(simulatedDb.getDb());
  const [activeTab, setActiveTab] = useState<'submissions' | 'users' | 'events'>('submissions');

  useEffect(() => {
    // Refresh data periodically
    const interval = setInterval(() => {
      setData({ ...simulatedDb.getDb() });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleReset = () => {
    if (confirm("Sei sicuro di voler resettare il database locale?")) {
      simulatedDb.reset();
    }
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-forest-green font-bold mb-1">
              <Database className="w-5 h-5" />
              <span>SIMULATED DB PANEL</span>
            </div>
            <h1 className="text-3xl font-display font-bold text-foreground">Dashboard Amministrazione</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <Home className="w-4 h-4" />
                Home
              </Button>
            </Link>
            <Button variant="destructive" className="gap-2" onClick={handleReset}>
              <Trash2 className="w-4 h-4" />
              Reset DB
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <Card className="p-6 bg-white shadow-sm border-border/50">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-forest-green/10 text-forest-green">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-foreground-muted font-medium">Submissions</p>
                <p className="text-2xl font-bold text-foreground">{data.submissions.length}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white shadow-sm border-border/50">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-foreground-muted font-medium">Utenti Registrati</p>
                <p className="text-2xl font-bold text-foreground">{data.users.length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white shadow-sm border-border/50 border-orange-200">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-foreground-muted font-medium">Pre-ordini Beta</p>
                <p className="text-2xl font-bold text-orange-600">{data.events.filter(e => e.event_type === 'CLICK_GET_BETA').length}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white shadow-sm border-border/50">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-foreground-muted font-medium">Eventi Totali</p>
                <p className="text-2xl font-bold text-foreground">{data.events.length}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex bg-muted/50 p-1 rounded-xl mb-6 w-fit">
          <button
            onClick={() => setActiveTab('submissions')}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'submissions' ? 'bg-white text-forest-green shadow-sm' : 'text-foreground-muted hover:text-foreground'
            }`}
          >
            Submissions
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'users' ? 'bg-white text-forest-green shadow-sm' : 'text-foreground-muted hover:text-foreground'
            }`}
          >
            Utenti
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'events' ? 'bg-white text-forest-green shadow-sm' : 'text-foreground-muted hover:text-foreground'
            }`}
          >
            Eventi
          </button>
        </div>

        {/* Content */}
        <Card className="overflow-hidden bg-white shadow-md border-border/50">
          {activeTab === 'submissions' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/30 border-b border-border">
                    <th className="px-6 py-4 text-sm font-bold text-foreground border-r border-border/50">ID / Data</th>
                    <th className="px-6 py-4 text-sm font-bold text-foreground border-r border-border/50">User ID</th>
                    <th className="px-6 py-4 text-sm font-bold text-foreground">Risposte</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {data.submissions.map((sub) => {
                    const subAnswers = [
                      ...data.answers_single.filter(a => a.submission_id === sub.id),
                      ...data.answers_multi.filter(a => a.submission_id === sub.id),
                      ...data.answers_ranked.filter(a => a.submission_id === sub.id),
                    ];
                    return (
                      <tr key={sub.id} className="hover:bg-muted/10 transition-colors">
                        <td className="px-6 py-4 border-r border-border/50">
                          <p className="font-medium text-foreground">#{sub.id.toString().slice(-4)}</p>
                          <p className="text-xs text-foreground-muted">{new Date(sub.created_at).toLocaleString('it-IT')}</p>
                        </td>
                        <td className="px-6 py-4 border-r border-border/50">
                          {sub.user_id ? (
                            <span className="px-2 py-1 rounded-md bg-forest-green/10 text-forest-green text-xs font-bold">
                              User #{sub.user_id.toString().slice(-4)}
                            </span>
                          ) : (
                            <span className="text-xs text-foreground-subtle italic">Anonimo</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-2">
                             {subAnswers.map((ans, i) => {
                               const question = data.questions.find(q => q.id === ans.question_id);
                               const option = data.options.find(o => o.id === (ans as any).option_id);
                               return (
                                 <div key={i} className="px-2 py-1 rounded bg-muted text-[10px] flex flex-col">
                                   <span className="font-bold text-foreground-muted uppercase tracking-wider">{question?.code}</span>
                                   <span>{option?.label}</span>
                                 </div>
                               );
                             })}
                             {data.answers_custom_text.filter(a => a.submission_id === sub.id).map((ans, i) => (
                               <div key={`c-${i}`} className="px-2 py-1 rounded bg-secondary/10 text-[10px] flex flex-col border border-secondary/20">
                                 <span className="font-bold text-secondary uppercase tracking-wider">Note / Custom</span>
                                 <span className="text-secondary">{ans.text}</span>
                               </div>
                             ))}
                             {subAnswers.length === 0 && <span className="text-xs text-foreground-subtle">Nessun dato salvato</span>}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {data.submissions.length === 0 && (
                <div className="py-20 text-center">
                  <Activity className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-foreground-muted italic">Nessuna submission trovata nel database locale.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'users' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/30 border-b border-border">
                    <th className="px-6 py-4 text-sm font-bold text-foreground border-r border-border/50">ID</th>
                    <th className="px-6 py-4 text-sm font-bold text-foreground border-r border-border/50">Email</th>
                    <th className="px-6 py-4 text-sm font-bold text-foreground">Data Registrazione</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {data.users.map((user) => (
                    <tr key={user.id} className="hover:bg-muted/10 transition-colors">
                      <td className="px-6 py-4 border-r border-border/50 text-sm font-bold text-foreground-subtle">#{user.id.toString().slice(-4)}</td>
                      <td className="px-6 py-4 border-r border-border/50 font-medium text-foreground">{user.email}</td>
                      <td className="px-6 py-4 text-sm text-foreground-muted">{new Date(user.created_at).toLocaleString('it-IT')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {data.users.length === 0 && (
                <div className="py-20 text-center">
                  <Users className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-foreground-muted italic">Nessun utente registrato.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'events' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/30 border-b border-border">
                    <th className="px-6 py-4 text-sm font-bold text-foreground border-r border-border/50">Orario</th>
                    <th className="px-6 py-4 text-sm font-bold text-foreground border-r border-border/50">Tipo Evento</th>
                    <th className="px-6 py-4 text-sm font-bold text-foreground">Payload / Info</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[...data.events].reverse().map((event) => (
                    <tr key={event.id} className="hover:bg-muted/10 transition-colors">
                      <td className="px-6 py-4 border-r border-border/50 text-xs text-foreground-muted whitespace-nowrap">
                        {new Date(event.created_at).toLocaleString('it-IT', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </td>
                      <td className="px-6 py-4 border-r border-border/50">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          event.event_type === 'SUBMIT_EMAIL' ? 'bg-secondary text-white' : 
                          event.event_type === 'CLICK_GET_BETA' ? 'bg-orange-500 text-white' :
                          'bg-primary/20 text-primary'
                        }`}>
                          {event.event_type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs font-mono text-foreground-muted truncate max-w-xs">
                        {event.event_type === 'CLICK_GET_BETA' ? (
                          <span className="text-orange-600 font-bold">L'utente ha cliccato sul pulsante finale della Beta! 🚀</span>
                        ) : JSON.stringify(event.event_payload)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {data.events.length === 0 && (
                <div className="py-20 text-center">
                  <Activity className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-foreground-muted italic">Nessun evento registrato.</p>
                </div>
              )}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
