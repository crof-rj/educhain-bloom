import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { FiatWithXLM } from '@/components/common/FiatWithXLM';
import { TrendingUp, Users, School, DollarSign, Heart, BookOpen, Utensils, Award } from 'lucide-react';

export default function AnalyticsPage() {
  // Mock data for charts
  const distributionsByMonth = [
    { month: 'Jul', amount: 45000, schools: 8 },
    { month: 'Aug', amount: 52000, schools: 12 },
    { month: 'Sep', amount: 48000, schools: 10 },
    { month: 'Oct', amount: 67000, schools: 15 },
    { month: 'Nov', amount: 71000, schools: 18 },
    { month: 'Dec', amount: 89000, schools: 22 },
    { month: 'Jan', amount: 95000, schools: 25 }
  ];

  const schoolsByType = [
    { name: 'Schools', value: 78, color: '#3b82f6' },
    { name: 'Kindergartens', value: 49, color: '#10b981' }
  ];

  const communityTypes = [
    { name: 'Community', value: 65, color: '#6366f1' },
    { name: 'Quilombola', value: 38, color: '#8b5cf6' },
    { name: 'Indigenous', value: 24, color: '#f59e0b' }
  ];

  const eligibilityScores = [
    { range: '0-20', count: 2 },
    { range: '21-40', count: 8 },
    { range: '41-60', count: 23 },
    { range: '61-80', count: 45 },
    { range: '81-100', count: 49 }
  ];

  const impactMetrics = {
    totalStudents: 8543,
    avgAttendanceImprovement: 23,
    mealsServedMonthly: 45780,
    teachersTrained: 234,
    communitiesReached: 45,
    avgEligibilityScore: 73.2
  };

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Impact Analytics</h1>
        <p className="text-muted-foreground">
          Detailed metrics and social impact analysis of EduChain Foundation
        </p>
      </div>

      {/* Key Impact Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="impact-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Students Impacted</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {impactMetrics.totalStudents.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +15% vs. previous month
            </p>
          </CardContent>
        </Card>

        <Card className="impact-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance Improvement</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              +{impactMetrics.avgAttendanceImprovement}%
            </div>
            <p className="text-xs text-muted-foreground">
              School average
            </p>
          </CardContent>
        </Card>

        <Card className="impact-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meals/Month</CardTitle>
            <Utensils className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">
              {impactMetrics.mealsServedMonthly.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all schools
            </p>
          </CardContent>
        </Card>

        <Card className="impact-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Award className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">
              {impactMetrics.avgEligibilityScore}
            </div>
            <p className="text-xs text-muted-foreground">
              General eligibility
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-success" />
              Monthly Distributions
            </CardTitle>
            <CardDescription>
              Resource distribution evolution over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={distributionsByMonth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number) => [
                    `R$ ${value.toLocaleString()}`, 
                    'Valor BRL'
                  ]}
                  labelFormatter={(label) => `Month: ${label}`}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const value = payload[0].value;
                      return (
                        <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                          <p className="font-medium">{`${label}`}</p>
                          <FiatWithXLM amountBRL={value} />
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="amount" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <School className="h-5 w-5 text-primary" />
              Distribution by Type
            </CardTitle>
            <CardDescription>
              Proportion between schools and kindergartens in the network
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={schoolsByType}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {schoolsByType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-destructive" />
              Communities Served
            </CardTitle>
            <CardDescription>
              Distribution by community type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={communityTypes}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {communityTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              Score Distribution
            </CardTitle>
            <CardDescription>
              School eligibility score ranges
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={eligibilityScores}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number) => [`${value} schools`, 'Quantity']}
                />
                <Bar dataKey="count" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Impact Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-secondary" />
            Social Impact Summary
          </CardTitle>
          <CardDescription>
            Foundation's main achievements and results
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Teachers Trained</span>
                <span className="font-bold text-secondary">{impactMetrics.teachersTrained}</span>
              </div>
              <Progress value={78} className="h-2" />
              <p className="text-xs text-muted-foreground">Annual target: 300 teachers (78%)</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Communities Reached</span>
                <span className="font-bold text-accent">{impactMetrics.communitiesReached}</span>
              </div>
              <Progress value={90} className="h-2" />
              <p className="text-xs text-muted-foreground">Annual target: 50 communities (90%)</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Retention Rate</span>
                <span className="font-bold text-success">92%</span>
              </div>
              <Progress value={92} className="h-2" />
              <p className="text-xs text-muted-foreground">Students who remain in school</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}