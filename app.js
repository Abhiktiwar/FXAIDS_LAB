// RENDER RESEARCH DOMAINS
    function renderAlumni() {
      const grid = document.getElementById('alumniGrid');
      grid.innerHTML = alumniMembers.map(alumnus => `
        <article class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm card-hover">
          <div class="flex items-center gap-3.5">
            ${alumnus.image
              ? `<img src="${alumnus.image}" alt="${alumnus.name}" class="w-12 h-12 rounded-2xl object-cover object-top shrink-0">`
              : `<div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-600 to-slate-800 text-white font-display font-bold flex items-center justify-center shrink-0">${alumnus.initials}</div>`}
            <div>
              <h3 class="font-display font-bold text-lg text-slate-900 dark:text-white"><a href="${alumnus.profile}" target="_blank" rel="noopener noreferrer" class="hover:text-teal-600 dark:hover:text-teal-400">${alumnus.name}</a></h3>
              <p class="text-xs font-medium text-teal-600 dark:text-teal-400">Graduated Ph.D. • <span class="font-mono">${alumnus.graduated}</span></p>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
            <div class="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Research Focus</div>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">${alumnus.focus}</p>
            <div class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mt-3">Present Position</div>
            <p class="text-xs text-slate-700 dark:text-slate-300 mt-1">${alumnus.position}</p>
          </div>
        </article>
      `).join('');
    }

    // RENDER RESEARCH TEAM
    function renderTeam(filter = 'all') {
      const grid = document.getElementById('teamGrid');
      const filtered = (filter === 'all' ? teamMembers : teamMembers.filter(m => m.category === filter))
        .map((member, index) => ({ member, index }))
        .sort((a, b) => {
          const dateA = Date.parse(`1 ${a.member.cohort.replace('Joined ', '')}`);
          const dateB = Date.parse(`1 ${b.member.cohort.replace('Joined ', '')}`);
          return dateA - dateB || a.index - b.index;
        })
        .map(({ member }) => member);

      grid.innerHTML = filtered.map(m => `
        <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm card-hover flex flex-col justify-between">
          <div>
            ${m.image ? `<img src="${m.image}" alt="${m.name}" class="w-full h-56 rounded-2xl object-cover object-top shadow-sm mb-10">` : ''}
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-center gap-3.5">
                ${m.image ? '' : `<div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-600 to-slate-800 text-white font-display font-bold text-base flex items-center justify-center shadow-sm shrink-0">${m.initials}</div>`}
                <div>
                  <h3 class="font-display font-bold text-lg text-slate-900 dark:text-white leading-snug">${m.profile ? `<a href="${m.profile}" target="_blank" rel="noopener noreferrer" class="hover:text-teal-600 dark:hover:text-teal-400">${m.name}</a>` : m.name}</h3>
                  <p class="text-xs font-medium text-teal-600 dark:text-teal-400">${m.role} &bull; <span class="font-mono">${m.cohort}</span></p>
                </div>
              </div>
              <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0">${m.badge}</span>
            </div>

            <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <div class="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Affiliation</div>
              <p class="text-xs text-slate-700 dark:text-slate-300 font-medium mt-0.5">${m.dept}</p>
              
              <div class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mt-3">Research Focus</div>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">${m.focus}</p>
            </div>
          </div>
        </div>
      `).join('');
    }

    function renderResearchInterns() {
      const grid = document.getElementById('internGrid');
      if (!grid) return;

      grid.innerHTML = researchInterns.map(intern => `
        <article class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm card-hover">
          <div class="flex items-start justify-between gap-3">
            <div>
              <h3 class="font-display font-bold text-base text-slate-900 dark:text-white">${intern.name}</h3>
              <p class="text-xs font-medium text-teal-600 dark:text-teal-400">${intern.programme}</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0">${intern.year}</span>
          </div>
          <p class="text-xs text-slate-700 dark:text-slate-300 font-medium mt-4">${intern.institution}</p>
          ${intern.focus ? `<p class="text-xs text-slate-600 dark:text-slate-400 mt-2"><span class="font-semibold text-slate-500 dark:text-slate-300">Focus:</span> ${intern.focus}</p>` : ''}
        </article>
      `).join('');
    }

    function filterTeam(category) {
      document.querySelectorAll('.team-filter-btn').forEach(btn => {
        btn.className = 'team-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all';
      });
      const activeBtn = document.getElementById('teamBtn-' + category);
      if (activeBtn) {
        activeBtn.className = 'team-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-teal-600 text-white transition-all';
      }
      renderTeam(category);
    }

    function updateTeamFilterLabels() {
      const counts = teamMembers.reduce((result, member) => {
        result[member.category] = (result[member.category] || 0) + 1;
        return result;
      }, {});
      document.getElementById('teamBtn-all').textContent = `All Scholars (${teamMembers.length})`;
      document.getElementById('teamBtn-mfsdsai').textContent = `MFSDS&AI (${counts.mfsdsai || 0})`;
      document.getElementById('teamBtn-doms').textContent = `DoMS (${counts.doms || 0})`;
    }

    // TOGGLE & RENDER EARLIER PUBLICATIONS ARCHIVE (2013-2025)
    function toggleArchiveList(forceOpen = false) {
      const drawer = document.getElementById('archiveDrawer');
      const btnText = document.getElementById('archiveToggleText');
      const btnIcon = document.getElementById('archiveToggleIcon');

      if (forceOpen) {
        isArchiveExpanded = true;
      } else {
        isArchiveExpanded = !isArchiveExpanded;
      }

      if (isArchiveExpanded) {
        drawer.classList.remove('hidden');
        btnText.textContent = 'Hide Publications List';
        btnIcon.className = 'fa-solid fa-chevron-up';
        renderPublications();
      } else {
        drawer.classList.add('hidden');
        btnText.textContent = 'Click to View Publications List (43 Papers)';
        btnIcon.className = 'fa-solid fa-list-ul';
      }
    }

    function expandArchiveAndScroll(e) {
      if (e) e.preventDefault();
      toggleArchiveList(true);
      document.getElementById('publications').scrollIntoView({ behavior: 'smooth' });
    }

    function renderPublications() {
      const query = (document.getElementById('pubSearchInput').value || '').toLowerCase();
      const container = document.getElementById('publicationsList');

      const filtered = earlierPublications.filter(p => {
        const matchType = currentPubType === 'all' || p.type === currentPubType;
        const matchSearch = !query
          || p.title.toLowerCase().includes(query)
          || p.authors.toLowerCase().includes(query)
          || p.venue.toLowerCase().includes(query)
          || String(p.year).includes(query);
        return matchType && matchSearch;
      });

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="p-8 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 text-sm">
            No publications matched your search query.
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map(p => `
        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-teal-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2 py-0.5 rounded text-[11px] font-mono font-bold ${p.type === 'journal' ? 'bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20' : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20'}">
                ${p.year} &bull; ${p.type === 'journal' ? 'Journal Article' : 'Conference Paper'}
              </span>
            </div>
            <h3 class="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white pt-0.5">${p.title}</h3>
            <p class="text-xs text-slate-600 dark:text-slate-400">${p.authors} — <em class="text-slate-800 dark:text-slate-200 font-medium">${p.venue}</em></p>
            ${p.note ? `<p class="text-xs font-semibold text-amber-600 dark:text-amber-400">${p.note}</p>` : ''}
          </div>
          ${p.doi ? `
            <a href="${p.doi}" target="_blank" rel="noopener noreferrer" class="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-600 hover:text-white text-slate-700 dark:text-slate-300 text-xs font-mono transition-colors self-start sm:self-center">
              <span>Link</span> <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          ` : ''}
        </div>
      `).join('');
    }

    function setPubType(type) {
      currentPubType = type;
      document.querySelectorAll('.pub-type-btn').forEach(btn => {
        btn.className = 'pub-type-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700';
      });
      document.getElementById('pubType-' + type).className = 'pub-type-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-teal-600 text-white';
      renderPublications();
    }

    // THEME TOGGLE
    function toggleTheme() {
      const html = document.documentElement;
      const icon = document.getElementById('themeIcon');
      html.classList.toggle('dark');
      if (html.classList.contains('dark')) {
        icon.className = 'fa-solid fa-sun text-amber-400 text-sm';
      } else {
        icon.className = 'fa-solid fa-moon text-sm';
      }
    }

    // MOBILE MENU TOGGLE
    function toggleMobileMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    }

    function showToast(message) {
      const toast = document.getElementById('toast');
      document.getElementById('toastMsg').textContent = message;
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 4000);
    }

    // INITIALIZE ON LOAD
    window.addEventListener('DOMContentLoaded', () => {
      renderAlumni();
      updateTeamFilterLabels();
      renderPublications();
      renderTeam('all');
      renderResearchInterns();
    });
