                {/* Compare user selector */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', gap: '8px', background: 'rgba(0,0,0,0.05)', padding: '6px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.1)' }}>
                      <button onClick={() => setActiveTab('reporte')} style={{ padding: '8px 20px', borderRadius: '10px', border: 'none', background: activeTab === 'reporte' ? '#0f004f' : 'transparent', color: activeTab === 'reporte' ? '#fff' : '#666', fontWeight: 800, fontSize: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>Panel Analítico</button>
                      <button onClick={() => setActiveTab('historial')} style={{ padding: '8px 20px', borderRadius: '10px', border: 'none', background: activeTab === 'historial' ? '#0f004f' : 'transparent', color: activeTab === 'historial' ? '#fff' : '#666', fontWeight: 800, fontSize: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>Historial</button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Comparar con:</div>
                        <select 
                            value={compareUser || ''} 
                            onChange={(e) => setCompareUser(e.target.value || null)} 
                            style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '14px', fontWeight: 700, color: '#111827', cursor: 'pointer', background: '#F8FAFC', minWidth: '200px' }}
                        >
                            <option value="">-- Ninguno --</option>
                            {finalInstructorsList.filter(u => u !== selectedUser).map((u: any) => <option key={u} value={u}>{u}</option>)}
                        </select>
                    </div>
                </div>

                {activeTab === 'reporte' && (
                    <>
                        {compareUser && compareUserKPIs ? (
                            /* VS MODE UI */
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                {/* User A Column */}
                                <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E5E7EB', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                                    <div style={{ textAlign: 'center', marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid #F3F4F6' }}>
                                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#0f004f', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold', margin: '0 auto 12px' }}>{selectedUser.charAt(0).toUpperCase()}</div>
                                        <div style={{ fontSize: '20px', fontWeight: 900, color: '#111827' }}>{selectedUser.split('@')[0]}</div>
                                        <div style={{ fontSize: '13px', color: '#6B7280', fontWeight: 600 }}>{selectedUserKPIs?.level}</div>
                                    </div>

                                    {/* Stats A */}
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                                        <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
                                            <div style={{ fontSize: '24px', fontWeight: 900, color: '#0f004f' }}>{selectedUserKPIs?.totalHoras}h</div>
                                            <div style={{ fontSize: '10px', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase' }}>Experiencia</div>
                                        </div>
                                        <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
                                            <div style={{ fontSize: '24px', fontWeight: 900, color: '#00D6CC' }}>{selectedUserKPIs?.uniqueCoursesCount}</div>
                                            <div style={{ fontSize: '10px', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase' }}>Cursos Diferentes</div>
                                        </div>
                                    </div>

                                    {/* Pie Chart A */}
                                    <div style={{ marginBottom: '24px' }}>
                                        <div style={{ fontSize: '12px', fontWeight: 800, color: '#4B5563', textTransform: 'uppercase', marginBottom: '12px' }}>Adopción de Herramientas</div>
                                        <div style={{ height: '180px' }}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart>
                                                    <Pie data={selectedUserKPIs?.usageData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={2} dataKey="value">
                                                        {selectedUserKPIs?.usageData.map((entry:any, index:number) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                                                    </Pie>
                                                    <Tooltip />
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>

                                    {/* Accuracy A */}
                                    <div>
                                        <div style={{ fontSize: '12px', fontWeight: 800, color: '#4B5563', textTransform: 'uppercase', marginBottom: '12px' }}>Precisión de Tiempo</div>
                                        <div style={{ height: '140px' }}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart data={selectedUserKPIs?.accuracyData} layout="vertical" margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
                                                    <XAxis type="number" hide />
                                                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} width={80} />
                                                    <Tooltip />
                                                    <Bar dataKey="value" fill="#10B981" radius={[0, 4, 4, 0]}>
                                                        {selectedUserKPIs?.accuracyData.map((entry:any, index:number) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                                                    </Bar>
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>

                                {/* User B Column */}
                                <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E5E7EB', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                                    <div style={{ textAlign: 'center', marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid #F3F4F6' }}>
                                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#16A34A', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold', margin: '0 auto 12px' }}>{compareUser.charAt(0).toUpperCase()}</div>
                                        <div style={{ fontSize: '20px', fontWeight: 900, color: '#111827' }}>{compareUser.split('@')[0]}</div>
                                        <div style={{ fontSize: '13px', color: '#6B7280', fontWeight: 600 }}>{compareUserKPIs?.level}</div>
                                    </div>

                                    {/* Stats B */}
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                                        <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
                                            <div style={{ fontSize: '24px', fontWeight: 900, color: '#16A34A' }}>{compareUserKPIs?.totalHoras}h</div>
                                            <div style={{ fontSize: '10px', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase' }}>Experiencia</div>
                                        </div>
                                        <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
                                            <div style={{ fontSize: '24px', fontWeight: 900, color: '#00D6CC' }}>{compareUserKPIs?.uniqueCoursesCount}</div>
                                            <div style={{ fontSize: '10px', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase' }}>Cursos Diferentes</div>
                                        </div>
                                    </div>

                                    {/* Pie Chart B */}
                                    <div style={{ marginBottom: '24px' }}>
                                        <div style={{ fontSize: '12px', fontWeight: 800, color: '#4B5563', textTransform: 'uppercase', marginBottom: '12px' }}>Adopción de Herramientas</div>
                                        <div style={{ height: '180px' }}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart>
                                                    <Pie data={compareUserKPIs?.usageData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={2} dataKey="value">
                                                        {compareUserKPIs?.usageData.map((entry:any, index:number) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                                                    </Pie>
                                                    <Tooltip />
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>

                                    {/* Accuracy B */}
                                    <div>
                                        <div style={{ fontSize: '12px', fontWeight: 800, color: '#4B5563', textTransform: 'uppercase', marginBottom: '12px' }}>Precisión de Tiempo</div>
                                        <div style={{ height: '140px' }}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart data={compareUserKPIs?.accuracyData} layout="vertical" margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
                                                    <XAxis type="number" hide />
                                                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} width={80} />
                                                    <Tooltip />
                                                    <Bar dataKey="value" fill="#10B981" radius={[0, 4, 4, 0]}>
                                                        {compareUserKPIs?.accuracyData.map((entry:any, index:number) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                                                    </Bar>
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* SINGLE USER ANALYTICAL UI */
                            <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E5E7EB', padding: '32px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                                
                                {/* Header / Identity */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid #F3F4F6' }}>
                                    <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(15,0,79,0.05)', color: '#0f004f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: 'bold' }}>{selectedUser.charAt(0).toUpperCase()}</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                                            <div style={{ background: '#F8FAFC', color: '#6B7280', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', border: '1px solid #E5E7EB' }}>{selectedUserKPIs?.level}</div>
                                            <div style={{ background: 'rgba(0,214,204,0.1)', color: '#00D6CC', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', border: '1px solid rgba(0,214,204,0.2)' }}>XP: {selectedUserKPIs?.totalHoras}h</div>
                                        </div>
                                        <div style={{ fontSize: '28px', fontWeight: 900, color: '#111827' }}>{selectedUser.split('@')[0]}</div>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                                    {/* Left Col: Tool Usage & Missions */}
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#111827', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Adopción de Herramientas</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', background: '#F8FAFC', padding: '24px', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
                                            <div style={{ width: '160px', height: '160px' }}>
                                                {selectedUserKPIs?.totalUsage > 0 ? (
                                                    <ResponsiveContainer width="100%" height="100%">
                                                        <PieChart>
                                                            <Pie data={selectedUserKPIs?.usageData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={2} dataKey="value">
                                                                {selectedUserKPIs?.usageData.map((entry:any, index:number) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                                                            </Pie>
                                                            <Tooltip />
                                                        </PieChart>
                                                    </ResponsiveContainer>
                                                ) : (
                                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF', fontSize: '12px', fontWeight: 'bold' }}>Sin datos</div>
                                                )}
                                            </div>
                                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                {selectedUserKPIs?.usageData.map((entry:any) => (
                                                    <div key={entry.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: entry.fill }} />
                                                            <span style={{ fontSize: '12px', fontWeight: 700, color: '#4B5563' }}>{entry.name}</span>
                                                        </div>
                                                        <span style={{ fontSize: '14px', fontWeight: 900, color: '#111827' }}>{entry.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Col: Time Accuracy */}
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#111827', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Precisión de Tiempo en Partidas</div>
                                        <div style={{ background: '#F8FAFC', padding: '24px', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                                                <div style={{ textAlign: 'center' }}>
                                                    <div style={{ fontSize: '24px', fontWeight: 900, color: '#10B981' }}>{selectedUserKPIs?.accuracyRaw.onTime}</div>
                                                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase' }}>A Tiempo</div>
                                                </div>
                                                <div style={{ textAlign: 'center' }}>
                                                    <div style={{ fontSize: '24px', fontWeight: 900, color: '#F59E0B' }}>{selectedUserKPIs?.accuracyRaw.fast}</div>
                                                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase' }}>Demasiado Rápido</div>
                                                </div>
                                                <div style={{ textAlign: 'center' }}>
                                                    <div style={{ fontSize: '24px', fontWeight: 900, color: '#EF4444' }}>{selectedUserKPIs?.accuracyRaw.slow}</div>
                                                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase' }}>Tiempo Excedido</div>
                                                </div>
                                            </div>

                                            <div style={{ height: '120px' }}>
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <BarChart data={selectedUserKPIs?.accuracyData} layout="vertical" margin={{ top: 0, right: 30, left: -20, bottom: 0 }}>
                                                        <XAxis type="number" hide />
                                                        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                                                        <Tooltip />
                                                        <Bar dataKey="value" fill="#10B981" radius={[0, 4, 4, 0]}>
                                                            {selectedUserKPIs?.accuracyData.map((entry:any, index:number) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                                                        </Bar>
                                                    </BarChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
