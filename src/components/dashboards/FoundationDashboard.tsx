import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  School, 
  DollarSign, 
  Users, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Heart,
  BookOpen,
  MapPin
} from 'lucide-react';

export function FoundationDashboard() {
  // Mock data - replace with actual API calls
  const stats = {
    totalFunds: 2500000,
    totalSchools: 127,
    monthlyDistributions: 89000,
    activeStudents: 8543,
  };

  const impactMetrics = {
    childrenFed: 8543,
    teachersTrained: 234,
    communitiesReached: 45,
    averageAttendanceImprovement: 23,
  };

  const recentDistributions = [
    { id: '1', school: 'Escola Quilombola São José', amount: 15000, status: 'completed', date: '2024-01-15' },
    { id: '2', school: 'Creche Indígena Tabajaras', amount: 8500, status: 'pending', date: '2024-01-14' },
    { id: '3', school: 'Escola Comunitária Esperança', amount: 12000, status: 'completed', date: '2024-01-13' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Dashboard da Fundação</h1>
            <p className="text-primary-foreground/90">
              Impactando a educação brasileira através da transparência blockchain
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-primary-foreground/80">Próxima Distribuição</p>
              <p className="font-semibold">15 de Janeiro</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="impact-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Recursos</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              R$ {stats.totalFunds.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +12% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="impact-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Escolas Ativas</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">
              {stats.totalSchools}
            </div>
            <p className="text-xs text-muted-foreground">
              +8 novas escolas este mês
            </p>
          </CardContent>
        </Card>

        <Card className="impact-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estudantes Ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">
              {stats.activeStudents.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +15% de frequência média
            </p>
          </CardContent>
        </Card>

        <Card className="impact-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Distribuições Mensais</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              R$ {stats.monthlyDistributions.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Meta: R$ 120.000 (74%)
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Impact Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-destructive" />
              Métricas de Impacto Social
            </CardTitle>
            <CardDescription>
              Indicadores chave do impacto na comunidade
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Crianças Alimentadas</span>
              <span className="font-bold text-success">{impactMetrics.childrenFed.toLocaleString()}</span>
            </div>
            <Progress value={85} className="h-2" />
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Professores Capacitados</span>
              <span className="font-bold text-secondary">{impactMetrics.teachersTrained}</span>
            </div>
            <Progress value={67} className="h-2" />
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Comunidades Alcançadas</span>
              <span className="font-bold text-accent">{impactMetrics.communitiesReached}</span>
            </div>
            <Progress value={92} className="h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-warning" />
              Ações Necessárias
            </CardTitle>
            <CardDescription>
              Pendências que requerem atenção
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-warning/10 rounded-lg">
              <Badge variant="outline" className="text-warning border-warning">
                5
              </Badge>
              <div className="flex-1">
                <p className="text-sm font-medium">Escolas pendentes de aprovação</p>
                <p className="text-xs text-muted-foreground">Revisar documentação</p>
              </div>
              <Button size="sm" variant="outline">Ver</Button>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-destructive/10 rounded-lg">
              <Badge variant="outline" className="text-destructive border-destructive">
                2
              </Badge>
              <div className="flex-1">
                <p className="text-sm font-medium">Métricas em atraso</p>
                <p className="text-xs text-muted-foreground">Dezembro/2023</p>
              </div>
              <Button size="sm" variant="outline">Ver</Button>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
              <Badge variant="outline" className="text-success border-success">
                8
              </Badge>
              <div className="flex-1">
                <p className="text-sm font-medium">Distribuições aprovadas</p>
                <p className="text-xs text-muted-foreground">Prontas para execução</p>
              </div>
              <Button size="sm" variant="outline">Ver</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Distributions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-success" />
            Distribuições Recentes
          </CardTitle>
          <CardDescription>
            Últimas transferências de recursos para as escolas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentDistributions.map((distribution) => (
              <div key={distribution.id} className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <School className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{distribution.school}</p>
                    <p className="text-sm text-muted-foreground">{distribution.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-success">
                    R$ {distribution.amount.toLocaleString()}
                  </span>
                  <Badge variant={distribution.status === 'completed' ? 'default' : 'secondary'}>
                    {distribution.status === 'completed' ? (
                      <><CheckCircle className="h-3 w-3 mr-1" /> Concluída</>
                    ) : (
                      <><AlertCircle className="h-3 w-3 mr-1" /> Pendente</>
                    )}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}